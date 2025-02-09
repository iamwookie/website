'use client';

import { motion } from 'motion/react';

export default function Container({ position, children }: { position: { x: number; y: number }; children: React.ReactNode }) {
    return (
        <motion.div
            animate={{
                x: position.x,
                y: position.y,
            }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                mass: 0.6,
            }}
            className="relative bg-black border border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-lg overflow-hidden z-10"
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10"></div>

            {/* Children */}
            {children}
        </motion.div>
    );
}
