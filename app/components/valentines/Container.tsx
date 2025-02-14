'use client';

import { motion } from 'motion/react';

type ContainerProps = {
    count: number;
    position: { x: number; y: number };
    children: React.ReactNode;
};

export default function Container({ position, children }: ContainerProps) {
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
            className="flex flex-col justify-center items-center gap-2 z-10"
        >
            <div className="relative bg-black border border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-lg overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10"></div>

                {/* Children */}
                {children}
            </div>
        </motion.div>
    );
}
