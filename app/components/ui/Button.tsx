import * as motion from 'motion/react-client'; // motion import for server components

export default function Button({ content }: { content?: string }) {
    const variants = {
        hover: { scale: 1.05, color: '#000000', backgroundColor: '#ffffff' },
        tap: { scale: 0.95, color: '#000000', backgroundColor: '#ffffff' },
    };

    return (
        <motion.div
            variants={variants}
            transition={{ duration: 0.2 }}
            whileHover="hover"
            whileTap="tap"
            className="rounded-lg border border-white/20 px-2 text-sm select-none"
        >
            {content}
        </motion.div>
    );
}
