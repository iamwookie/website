'use client';

import { PortfolioItem } from 'types';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

import testPic from '../../../public/assets/portfolio/asap.png';

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
            className="flex gap-4 w-[400px]"
        >
            <div className="grow rounded-lg overflow-hidden bg-black bg-opacity-50 border-2">
                <Image src={bannerURL} alt="Project Banner" width={0} height={0} placeholder="blur" className="overflow-hidden border-b-2" />

                <div className="m-2.5">
                    <h3 className="text-xl">{name}</h3>
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </motion.a>
    );
}
