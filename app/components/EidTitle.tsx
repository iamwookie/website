'use client';

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MotionLink = motion.create(Link);

const letters = [
    { id: 0, content: 'b' },
    { id: 1, content: 'i' },
    { id: 2, content: 'l' },
    { id: 3, content: '.' },
    { id: 4, content: 'a' },
    { id: 5, content: 'l' },
];

// animation time: ~2.4s (initial load)

export default function EidTitle() {
    const [items, setItems] = useState(letters);
    const [prefix, showPrefix] = useState(false);

    useEffect(() => {
        const dotTimer = setTimeout(() => setItems(letters.filter(({ id }) => id !== 3)), 800);
        const prefixTimer = setTimeout(() => showPrefix(true), 1800);

        return () => {
            clearTimeout(dotTimer);
            clearTimeout(prefixTimer);
        };
    }, []);

    return (
        <MotionLink
            whileHover={{ opacity: 0.5 }}
            whileTap={{ opacity: 0.5 }}
            initial={{ color: '#ffffff' }}
            animate={{ color: 'var(--color-eid-title)' }}
            transition={{ color: { duration: 0.8, ease: 'easeOut' } }}
            href="/"
            aria-label="Home"
            className="flex items-center justify-center text-2xl"
        >
            <AnimatePresence>
                {prefix && (
                    <motion.span
                        key="prefix"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        from:&nbsp;
                    </motion.span>
                )}

                {items.map(({ id, content }) => (
                    <motion.span key={id} layout exit={{ opacity: 0 }}>
                        {content}
                    </motion.span>
                ))}
            </AnimatePresence>
        </MotionLink>
    );
}
