'use client';

import { motion } from 'motion/react';

import PKFlag from '../../public/assets/pk_flag.svg';
import PSFlag from '../../public/assets/ps_flag.svg';

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.4 }}
                className="flex justify-center items-center gap-2 w-full py-4"
            >
                <PKFlag width={32} height={24} className="rounded-sm" />
                <PSFlag width={32} height={24} className="rounded-sm" />
            </motion.div>
        </footer>
    );
}
