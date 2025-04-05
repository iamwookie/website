'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

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

    useEffect(() => {
        setTimeout(() => setItems(letters.filter(({ id }) => id != 3)), 1500);
    }, []);

    return (
        <div className="flex items-center justify-center text-2xl">
            <div className="flex">
                <AnimatePresence>
                    {items.map(({ id, content }) => (
                        <motion.span key={id} layout exit={{ opacity: 0 }}>
                            {content}
                        </motion.span>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
