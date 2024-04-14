import type { Metadata } from 'next';
import type { PortfolioItem } from 'types';

import { getPlaiceholder } from 'plaiceholder';
import fs from 'fs';

import TechStack from '@components/portfolio/TechStack';
import PortfolioCard from '@components/portfolio/PortfolioCard';
import BackButton from '@components/ui/BackButton';
import Footer from '@components/Footer';

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
            <main className="relative grid place-items-center h-full lg:h-screen">
                <div className="container animate__animated animate__fadeIn">
                    <div className="relative flex flex-col justify-center gap-4 m-5">
                        <BackButton />

                        <div className="text-center">
                            <h1 className="text-3xl">portfolio</h1>
                            <h5 className="text-sm">{"(if you don't know what this means, you shouldn't be here)"}</h5>
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
                            className="inline-block text-center underline hover:opacity-50 transition-opacity"
                        >
                            website source
                        </a>
                    </div>
                </div>
            </main>

            <Footer className="relative lg:fixed" />
        </>
    );
}
