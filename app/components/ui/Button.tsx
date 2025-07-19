import * as motion from 'motion/react-client';
import React from 'react';

// motion import for server components

export default function Button({ content }: { content?: string }) {
    const variants = { active: { scale: 1.05, color: '#000000', backgroundColor: '#ffffff' } };

    return (
        <motion.div
            variants={variants}
            whileHover="active"
            whileTap="active"
            transition={{ duration: 0.2 }}
            className="rounded-lg border border-white/20 px-2 text-sm"
        >
            {content}
        </motion.div>
    );
}
