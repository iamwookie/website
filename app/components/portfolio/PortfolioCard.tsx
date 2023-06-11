'use client';

import { motion } from 'framer-motion';
import { PortfolioItem } from 'types';
import Image from 'next/image';

export default function PortfolioCard({ name, description, bannerURL, link }: PortfolioItem) {
    return (
        <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
            href={link ?? undefined}
            target="_blank"
            rel="noreferrer noopener"
        >
            <div className="max-w-sm rounded-lg overflow-hidden bg-black bg-opacity-50 border-2">
                <Image src={bannerURL} width={380} height={213.75} alt="Project Banner" priority />
                <div className="my-2 mx-2 text-left">
                    <h3 className="text-xl">{name}</h3>
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </motion.a>
    );
}
