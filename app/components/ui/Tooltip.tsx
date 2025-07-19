// motion import for server components
import * as motion from 'motion/react-client';

export default function Tooltip({ children, content }: { children: React.ReactNode; content: string }) {
    const variants = {
        initial: { opacity: 0, scale: 0.95, y: -6 },
        hover: { opacity: 1, scale: 1, y: -10 },
    };

    return (
        <motion.div className="relative inline-block" initial="initial" whileHover="hover">
            {children}

            <motion.div
                variants={variants}
                transition={{ duration: 0.2 }}
                className="pointer-events-none absolute -top-6 left-1/2 w-max max-w-xs -translate-x-1/2 rounded-lg border border-white/20 bg-white px-2 text-sm text-black"
            >
                {content}
            </motion.div>
        </motion.div>
    );
}
