import Link from 'next/link';
import TechStack from '@components/portfolio/TechStack';
import PortfolioCard from '@components/portfolio/PortfolioCard';
import BackButton from '@components/ui/BackButton';
import data from '@data/portfolio.json';
import fs from 'fs';
import { getPlaiceholder } from 'plaiceholder';
import { PortfolioItem } from 'types';

export const metadata = {
    title: 'portfolio',
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
            <BackButton />

            <h1 className="text-2xl">portfolio</h1>
            <h5 className="text-sm">{'(random stuff)'}</h5>

            <TechStack
                stack={[
                    { name: 'JavaScript', bgColor: '#93810d', borderColor: '#f0Db4f' },
                    { name: 'TypeScript', bgColor: '#003d66', borderColor: '#007acc' },
                    { name: 'NodeJS', bgColor: '#345031', borderColor: '#68a063' },
                    { name: 'React', bgColor: '#0486aa', borderColor: '#61dafb' },
                ]}
            />

            <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-1 mt-5">
                {images.map((image) => {
                    return (
                        <PortfolioCard
                            name={image.name}
                            description={image.description}
                            bannerURL={image.bannerURL}
                            blurDataURL={image.blurDataURL}
                            link={image.link}
                            key={image.name}
                        />
                    );
                })}
            </div>
        </>
    );
}
