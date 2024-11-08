'use client';

import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

export default function Subtitle() {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <motion.div
            className="relative bottom-2 w-full text-center overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: isDesktop ? '1.75rem' : '1.5rem' }}
            transition={{ delay: 2 }}
        >
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', mass: 0.5, delay: 2.2 }}
                className="absolute w-full text-md md:text-xl tracking-[0.25rem] z-10"
            >
                technical shenanigans
            </motion.div>
        </motion.div>
    );
}
