'use client';

import { motion } from 'motion/react';

import Spotify from './Spotify';

import PKFlag from '@public/assets/pk_flag.svg';
import PSFlag from '@public/assets/ps_flag.svg';

export default function Footer() {
    return (
        <footer className="fixed bottom-0 flex w-full flex-col px-4 md:px-0">
            <Spotify />

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.4 }}
                className="flex w-full items-center justify-center gap-2 py-4"
            >
                <PKFlag width={32} height={24} className="rounded-xs" />
                <PSFlag width={32} height={24} className="rounded-xs" />
            </motion.div>
        </footer>
    );
}
