'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useState, useEffect } from 'react';

const TEXT = ['☠', '✦', '✧', '☾', '✹', '✶', '✻', '❂', '❉', '❖', '★', '☆', '☼', '影', '夜', '夢', '闇', '空', '零', '死'];

interface Echo {
    id: number;
    initial: {
        x: number;
        y: number;
    };
    animate: {
        x: number;
        y: number;
    };
    content: string;
}

export default function Echoes() {
    const prefersReducedMotion = useReducedMotion();
    return prefersReducedMotion ? null : <AnimatedEchoes />;
}

function AnimatedEchoes() {
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

                const id = Date.now() + Math.random();
                const initial = {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                };
                const animate = {
                    x: (window.innerWidth / 2 - initial.x) * 0.4,
                    y: (window.innerHeight / 2 - initial.y) * 0.4,
                };
                const content = TEXT[Math.floor(Math.random() * TEXT.length)];
                const next: Echo = { id, initial, animate, content };

                setEchoes((prev) => (prev.length >= 20 ? [...prev.slice(1), next] : [...prev, next]));
            }

            raf = requestAnimationFrame(tick);
        }

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
            {echoes.map((echo) => (
                <motion.span
                    key={echo.id}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                        opacity: [0, 0.4, 0.4, 0],
                        scale: 0.4,
                        x: echo.animate.x,
                        y: echo.animate.y,
                    }}
                    transition={{
                        duration: 4,
                        ease: 'easeOut',
                        opacity: {
                            duration: 4,
                            ease: ['easeIn', 'linear', 'easeOut'],
                            times: [0, 0.25, 0.75, 1],
                        },
                    }}
                    style={{ left: echo.initial.x, top: echo.initial.y }}
                    className="absolute text-6xl font-extrabold tracking-widest text-white will-change-[transform,opacity]"
                >
                    {echo.content}
                </motion.span>
            ))}
        </div>
    );
}
