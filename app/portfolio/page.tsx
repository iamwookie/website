import type { Metadata } from 'next';
import type { PortfolioItem } from 'types';

import BackButton from '@components/ui/BackButton';
import Badge from '@components/ui/Badge';
import TechStack from '@components/portfolio/TechStack';
import PortfolioCard from '@components/portfolio/PortfolioCard';
import Footer from '@components/Footer';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'fs';

import data from '@data/portfolio.json';

export const metadata: Metadata = {
    title: 'portfolio',
    description: 'Random stuff I do.',
    openGraph: {
        title: 'portfolio',
        description: 'Random stuff I do.',
    },
};

const getImages = async (): Promise<PortfolioItem[]> =>
    Promise.all(
        data.map(async (item) => {
            const buffer = fs.readFileSync('public' + item.bannerURL);
            const { base64 } = await getPlaiceholder(buffer);
            return { ...item, blurDataURL: base64 };
        })
    );

export default async function Portfolio() {
    const images = await getImages();

    return (
        <>
            <main className="flex justify-center items-center h-full dt:h-screen">
                <div className="container animate__animated animate__fadeIn">
                    <div className="relative flex flex-col justify-center gap-4 m-4 sm:m-8">
                        <BackButton />

                        <div className="flex flex-col gap-2 text-center">
                            <h1 className="text-3xl">portfolio</h1>

                            <div className="flex justify-center gap-2 text-sm">
                                <Badge color="#dd8a2f">AMD Ryzen 5 3600X</Badge>
                                <Badge color="#76b900">Nvidia RTX 3070</Badge>
                                <Badge color="#ece81a">Corsair 32GB DDR4</Badge>
                            </div>
                        </div>

                        <TechStack />

                        <div className="flex flex-wrap justify-center gap-6">
                            {images.map((image, index) => {
                                return (
                                    <PortfolioCard
                                        name={image.name}
                                        description={image.description}
                                        bannerURL={image.bannerURL}
                                        blurDataURL={image.blurDataURL}
                                        link={image.link}
                                        key={index}
                                    />
                                );
                            })}
                        </div>

                        <a
                            href="https://github.com/iamwookie/website"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="mx-auto underline hover:opacity-50 transition-opacity"
                        >
                            website source
                        </a>
                    </div>
                </div>
            </main>

            <Footer className="relative dt:fixed dt:bottom-0" />
        </>
    );
}
