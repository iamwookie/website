'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const letters = [
    { id: 0, content: 'b' },
    { id: 1, content: 'i' },
    { id: 2, content: 'l' },
    { id: 3, content: '.' },
    { id: 4, content: 'a' },
    { id: 5, content: 'l' },
];

export default function Title() {
    const [items, setItems] = useState(letters);
    const [finale, setFinale] = useState(false);

    useEffect(() => {
        setTimeout(() => setItems(letters.filter(({ id }) => id != 3)), 1000);
        setTimeout(() => setFinale(true), 2000);
    }, []);

    return (
        <div className="flex justify-center items-center text-8xl md:text-9xl">
            <div className="flex">
                <AnimatePresence>
                    {items.map(({ id, content }) => (
                        <motion.span key={id} layout exit={{ opacity: 0 }}>
                            {content}
                        </motion.span>
                    ))}
                </AnimatePresence>
            </div>

            {finale && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-6xl md:text-8xl">
                    🍹
                </motion.span>
            )}
        </div>
    );
}
