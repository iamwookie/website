'use client';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

import ArrowLeft from '../../../public/assets/ui/arrow-left-solid.svg';

export default function BackButton() {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <motion.div
            className="absolute top-2 left-2 text-md"
            whileTap={{ scale: 0.95 }}
            whileHover={isDesktop ? { scale: 1.05 } : {}}
            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
        >
            <Link href="/">
                <ArrowLeft width={20} height={20} fill="currentColor" />
            </Link>
        </motion.div>
    );
}
