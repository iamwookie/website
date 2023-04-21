import Image from "next/future/image";

import { motion } from "framer-motion";

import { PortfolioItem } from "types";

export default function PortfolioCard({ name, description, bannerURL, blurDataURL, link }: PortfolioItem) {
    return (
        <motion.a whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 350, damping: 15 }} href={link} target="_blank" rel="noreferrer">
            <div className="max-w-sm rounded-lg overflow-hidden border-2">
                <Image src={bannerURL} width={380} height={213.75} alt="Project Banner" placeholder="blur" blurDataURL={blurDataURL} priority />
                <div className="my-2 mx-2 text-left">
                    <h3 className="text-xl">{name}</h3>
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </motion.a>
    );
}
