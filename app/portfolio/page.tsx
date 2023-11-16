import type { PortfolioItem } from 'types';
import { getPlaiceholder } from 'plaiceholder';
import TechStack from '@components/portfolio/TechStack';
import PortfolioCard from '@components/portfolio/PortfolioCard';
import BackButton from '@components/ui/BackButton';
import data from '@data/portfolio.json';
import fs from 'fs';

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
        <div className="relative m-5 text-center animate__animated animate__fadeIn">
            <BackButton />

            <h1 className="text-3xl">portfolio</h1>
            <h5 className="text-sm">{"(if you don't know what this means, you shouldn't be here)"}</h5>

            <TechStack />

            <div className="flex flex-col items-center md:items-stretch gap-5 mt-5">
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
                className="inline-block mt-5 underline hover:opacity-50"
            >
                website source
            </a>
        </div>
    );
}
