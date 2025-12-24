import * as motion from 'motion/react-client'; // motion import for server components
import { cn } from '@lib/utils';

export default function Button({
    type = 'button',
    disabled = false,
    className,
    children,
}: {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
}) {
    const variants = {
        hover: { scale: 1.05, color: '#000000', backgroundColor: '#ffffff' },
        tap: { scale: 0.95, color: '#000000', backgroundColor: '#ffffff' },
    };

    return (
        <motion.button
            type={type}
            variants={variants}
            transition={{ duration: 0.2 }}
            whileHover={disabled ? undefined : 'hover'}
            whileTap={disabled ? undefined : 'tap'}
            disabled={disabled}
            className={cn(
                'rounded-lg border border-white/20 px-2 text-sm select-none',
                disabled && 'cursor-not-allowed opacity-50',
                className,
            )}
        >
            {children}
        </motion.button>
    );
}
