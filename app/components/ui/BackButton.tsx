'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function BackButton() {
    return (
        <motion.button
            className="absolute top-4 left-4 text-md"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
        >
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </motion.button>
    );
}
