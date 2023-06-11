'use client';

import { motion } from 'framer-motion';

export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <motion.button
            className="block rounded-lg my-2 mx-auto px-2 border-2 hover:bg-white hover:text-black"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
        >
            {children}
        </motion.button>
    );
}
