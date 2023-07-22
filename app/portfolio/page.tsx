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

            <TechStack />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
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

            <p className='mt-5'>
                icons provided by{' '}
                <a href="https://icons8.com/" target="_blank" className="underline hover:opacity-50">
                    icons8
                </a>
            </p>
        </>
    );
}
