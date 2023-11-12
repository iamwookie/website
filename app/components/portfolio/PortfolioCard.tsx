'use client';

import { PortfolioItem } from 'types';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

export default function PortfolioCard({ name, description, bannerURL, blurDataURL, link }: PortfolioItem) {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <motion.a
            whileTap={{ scale: 0.95 }}
            whileHover={isDesktop ? { scale: 1.05 } : {}}
            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
            href={link ?? undefined}
            target="_blank"
            rel="noreferrer noopener"
        >
            <div
                className={`flex flex-col md:flex-row md:max-w-[760px] rounded-lg overflow-hidden bg-black bg-opacity-50 border-2 shadow-md shadow-white/50`}
            >
                <Image src={bannerURL} width={380} height={213.75} alt="Project Banner" placeholder="blur" blurDataURL={blurDataURL} priority />
                <div className="m-2.5 text-left">
                    <h3 className="text-xl">{name}</h3>
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </motion.a>
    );
}
