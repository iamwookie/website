'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const initial = [
    { id: 0, content: 'b' },
    { id: 1, content: 'i' },
    { id: 2, content: 'l' },
    { id: 3, content: '.' },
    { id: 4, content: 'a' },
    { id: 5, content: 'l' },
];

const final = [
    { id: 0, content: 'b' },
    { id: 1, content: 'i' },
    { id: 2, content: 'l' },
    { id: 4, content: 'a' },
    { id: 5, content: 'l' },
];

export default function Title() {
    const [items, setItems] = useState(initial);
    const [finale, setFinale] = useState(false);

    useEffect(() => {
        setTimeout(() => setItems(final), 1000);
        setTimeout(() => setFinale(true), 2000);
    }, []);

    return (
        <div className="flex justify-center items-center text-8xl md:text-9xl">
            <div className="flex">
                <AnimatePresence>
                    {items.map(({ id, content }) => (
                        <motion.span key={id} exit={{ opacity: 0 }} layout>
                            {content}
                        </motion.span>
                    ))}
                </AnimatePresence>
            </div>

            {finale && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-6xl md:text-7xl">
                    &nbsp;😈
                </motion.span>
            )}
        </div>
    );
}
