'use client';

import { motion } from 'motion/react';
import { useMediaQuery } from 'react-responsive';

import Link from 'next/link';

const MotionLink = motion(Link);

export default function PortfolioButton() {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <MotionLink
            href="/portfolio"
            whileTap={{ scale: 0.95 }}
            whileHover={isDesktop ? { scale: 1.05 } : {}}
            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
            className="rounded-full border-2 px-2 hover:bg-white hover:text-black"
        >
            portfolio
        </MotionLink>
    );
}
