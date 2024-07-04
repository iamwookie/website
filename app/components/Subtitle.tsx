'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const headings = [
    'professional yapper',
    'average gamer',
    'internet explorer',
    'caffeine addict',
    'programmer',
    'engineer',
    'student',
    "can't think of more",
];

export default function Subtitle() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        setDirection((d) => -d);
        const intervalId = setInterval(() => setIndex((i) => (i + 1) % headings.length), 2000);
        return () => clearInterval(intervalId);
    }, [index]);

    return (
        <div className="relative bottom-2 w-full h-6 md:h-7 text-center overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={headings[index]}
                    initial={{ y: direction == 1 ? 100 : -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: direction == 1 ? -100 : 100, opacity: 0 }}
                    transition={{ type: 'spring', mass: 0.5 }}
                    className="absolute w-full text-md md:text-xl tracking-[0.25rem] z-10"
                >
                    {headings[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
