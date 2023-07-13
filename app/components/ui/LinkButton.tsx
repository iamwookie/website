'use client';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

export default function LinkButton({ href, target, children }: { href: string; target?: string; children: React.ReactNode }) {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <motion.div
            className="inline-block rounded-lg"
            whileTap={{ scale: 0.95 }}
            whileHover={isDesktop ? { scale: 1.05 }: {}}
            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
        >
            <Link href={href} target={target} className='rounded-lg px-2 border-2 shadow-md shadow-white/50 hover:bg-white hover:text-black'>
                {children}
            </Link>
        </motion.div>
    );
}
