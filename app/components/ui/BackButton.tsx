'use client';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            </Link>
        </motion.div>
    );
}
