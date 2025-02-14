'use client';

import { motion } from 'motion/react';
import Button from './Button';

export default function Response({ onYes, onNo, response }: { onYes: () => void; onNo: () => void; response: boolean }) {
    return (
        <div className="relative flex flex-col items-center justify-center h-full text-center p-6">
            {/* Question */}
            <h1 className="text-xl md:text-3xl font-bold text-pink-500 mb-6">Will you be my Valentine?</h1>

            {/* Responses */}
            {response ? (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-lg md:text-xl text-pink-500"
                >
                    {response && <p>Awww! Never doubted you pookie! 💘</p>}
                </motion.div>
            ) : (
                <div className="space-y-4 w-full">
                    <Button
                        onClick={onYes}
                        className="w-full text-sm md:text-base bg-pink-500 hover:bg-pink-600 text-white shadow-md shadow-pink-500/50"
                    >
                        Yes 💖
                    </Button>

                    <Button
                        onClick={onNo}
                        className="w-full bg-transparent text-sm md:text-base hover:bg-pink-950 text-pink-500 border border-pink-500 shadow-md shadow-pink-500/50"
                    >
                        No 💔
                    </Button>
                </div>
            )}
        </div>
    );
}
