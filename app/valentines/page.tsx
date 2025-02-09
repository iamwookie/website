'use client';

import { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Fireworks, FireworksHandlers } from '@fireworks-js/react';
import Button from '@components/ui/Button';

export default function Valentines() {
    const [response, setResponse] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const fireworksRef = useRef<FireworksHandlers>(null);

    const movePrompt = useCallback(() => {
        const maxX = window.innerWidth - 420;
        const maxY = window.innerHeight - 220;

        const newX = (Math.random() - 0.5) * maxX;
        const newY = (Math.random() - 0.5) * maxY;

        setPosition({ x: newX, y: newY });
    }, []);

    const handleYes = () => {
        fireworksRef.current?.start();
        setPosition({ x: 0, y: 0 });
        setResponse(true);
    };

    return (
        <>
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

                <div className="relative flex flex-col items-center justify-center h-full text-center p-6">
                    <h1 className="text-3xl font-bold text-pink-500 mb-6">Will you be my Valentine?</h1>

                    {response ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-xl text-pink-500"
                        >
                            {response && <p>YAYAYAYAYAYAY! 💘</p>}
                        </motion.div>
                    ) : (
                        <div className="space-y-4 w-full">
                            <Button onClick={handleYes} className="w-full bg-pink-500 hover:bg-pink-600 text-white shadow-md shadow-pink-500/50">
                                Yes 💖
                            </Button>

                            <Button
                                onClick={() => movePrompt()}
                                className="w-full bg-transparent hover:bg-pink-950 text-pink-500 border border-pink-500 shadow-md shadow-pink-500/50"
                            >
                                No 💔
                            </Button>
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Fireworks */}
            <Fireworks
                autostart={false}
                ref={fireworksRef}
                options={{ hue: { min: 300, max: 350 }, friction: 1, particles: 100 }}
                style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                }}
            />
        </>
    );
}
