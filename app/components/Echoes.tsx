'use client';

import { motion } from 'motion/react';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const TEXT = ['☠', '✦', '✧', '☾', '✹', '✶', '✻', '❂', '❉', '❖', '★', '☆', '☼', '影', '夜', '夢', '闇', '空', '零', '死'];

function createEcho(container: HTMLElement): void {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    const echo = document.createElement('div');
    container.appendChild(echo);
    const root = createRoot(echo);

    root.render(
        <motion.h1
            initial={{ opacity: 0.4, x, y }}
            animate={{ opacity: 0, x: x + 30, y: y - 30 }}
            transition={{ duration: 2 }}
            onAnimationComplete={() => {
                root.unmount();
                echo.remove();
            }}
            className="absolute text-6xl font-extrabold tracking-widest text-white"
        >
            {TEXT[Math.floor(Math.random() * TEXT.length)]}
        </motion.h1>,
    );
}

export default function Echoes() {
    useEffect(() => {
        const container = document.getElementById('echo-root');

        if (!container) {
            console.error('Echo container not found.');
            return;
        }

        const interval = setInterval(() => createEcho(container), 100);

        return () => clearInterval(interval);
    }, []);

    return <div id="echo-root" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" />;
}
