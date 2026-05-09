'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const TEXT = ['☠', '✦', '✧', '☾', '✹', '✶', '✻', '❂', '❉', '❖', '★', '☆', '☼', '影', '夜', '夢', '闇', '空', '零', '死'];

interface Echo {
    id: number;
    x: number;
    y: number;
    content: string;
}

export default function Echoes() {
    const [echoes, setEchoes] = useState<Echo[]>([]);

    useEffect(() => {
        let acc = 0;
        let last = performance.now();
        let raf: number;

        function tick(now: number) {
            acc += now - last;
            last = now;

            if (acc >= 200) {
                acc = 0;

                setEchoes((prev) => {
                    const next: Echo = {
                        id: Date.now() + Math.random(),
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        content: TEXT[Math.floor(Math.random() * TEXT.length)],
                    };

                    return prev.length >= 20 ? [...prev.slice(1), next] : [...prev, next];
                });
            }

            raf = requestAnimationFrame(tick);
        }

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
            {echoes.map((echo) => (
                <motion.h1
                    key={echo.id}
                    initial={{ opacity: 0.4, x: echo.x, y: echo.y }}
                    animate={{ opacity: 0, x: echo.x + 30, y: echo.y - 30 }}
                    transition={{ duration: 2 }}
                    className="absolute text-6xl font-extrabold tracking-widest text-white"
                >
                    {echo.content}
                </motion.h1>
            ))}
        </div>
    );
}
