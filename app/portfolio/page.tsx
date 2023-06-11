import Link from 'next/link';
import TechStack from '@components/portfolio/TechStack';
import PortfolioCard from '@components/portfolio/PortfolioCard';
import BackButton from '@components/ui/BackButton';

import data from '@data/portfolio.json';

export const metadata = {
    title: 'portfolio',
};

export default async function Portfolio() {
    return (
        <>
            <Link href="/">
                <BackButton />
            </Link>

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
                {data.map((item) => {
                    return (
                        <PortfolioCard
                            name={item.name}
                            description={item.description}
                            bannerURL={item.bannerURL}
                            link={item.link}
                            key={item.name}
                        />
                    );
                })}
            </div>
        </>
    );
}
