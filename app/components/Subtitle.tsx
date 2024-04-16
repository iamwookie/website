'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const letters = [
    { id: 0, content: 'p' },
    { id: 1, content: 'r' },
    { id: 2, content: 'o' },
    { id: 3, content: '\xa0' },
    { id: 4, content: 'g' },
    { id: 5, content: 'r' },
    { id: 6, content: 'a' },
    { id: 7, content: 'm' },
    { id: 8, content: 'm' },
    { id: 9, content: 'e' },
    { id: 10, content: 'r' },
];

export default function Subtitle() {
    const [items, setItems] = useState(letters.filter(({ id }) => id != 5 && id != 8));

    useEffect(() => {
        setTimeout(() => setItems(letters), 2000);
        setTimeout(() => setItems(letters.filter(({ id }) => id != 3)), 4000);
    }, []);

    return (
        <div className="flex justify-center items-center relative bottom-2 text-md md:text-xl">
            <div className="flex">
                <AnimatePresence>
                    {items.map(({ id, content }) => {
                        return items == letters && (id == 5 || id == 8) ? (
                            <motion.span
                                key={id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="mx-0.5"
                            >
                                {content}
                            </motion.span>
                        ) : (
                            <motion.span key={id} layout className="mx-0.5">
                                {content}
                            </motion.span>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
