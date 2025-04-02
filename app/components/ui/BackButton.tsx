'use client';

import { motion } from 'motion/react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

import ArrowLeft from '@public/assets/ui/arrow-left-solid.svg';

const MotionLink = motion(Link);

export default function BackButton() {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <MotionLink
            href="/"
            className="absolute top-2 left-2"
            whileTap={{ scale: 0.95 }}
            whileHover={isDesktop ? { scale: 1.05 } : {}}
            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
        >
            <ArrowLeft width={20} height={20} fill="currentColor" />
        </MotionLink>
    );
}
