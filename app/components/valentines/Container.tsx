'use client';

import { motion } from 'motion/react';

type ContainerProps = {
    count: number;
    position: { x: number; y: number };
    response: boolean;
    children: React.ReactNode;
};

export default function Container({ count, position, response, children }: ContainerProps) {
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

            {/* Yes count */}
            {response && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-sm text-center font-medium text-pink-500"
                >
                    {count.toLocaleString()} others said yes 💗
                </motion.p>
            )}
        </motion.div>
    );
}
