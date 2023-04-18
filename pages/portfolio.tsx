import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import TechStack from "components/TechStack";
import PortfolioCard from "components/portfolio/PortfolioCard";
import BackButton from "components/buttons/BackButton";

import { getPlaiceholder } from "plaiceholder";

import { PortfolioItem } from "types";

export default function Portfolio({ items }: { items: PortfolioItem[] }) {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Link href="/">
                    <BackButton />
                </Link>
                
                <h1 className="text-2xl">Portfolio</h1>
                <h5 className="text-sm">{"(projects & stuff)"}</h5>

                <TechStack stack={[
                    { name: "JavaScript", bgColor: "#93810d", borderColor: "#F0DB4F" },
                    { name: "TypeScript", bgColor: "#003D66", borderColor: "#007ACC" },
                    { name: "NodeJS", bgColor: "#345031", borderColor: "#68A063" },
                ]}/>

                <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-1 mt-5">
                    {items.map(item => {
                        return (
                            <PortfolioCard
                                name={item.name}
                                description={item.description}
                                bannerURL={item.bannerURL}
                                blurDataURL={item.blurDataURL}
                                link={item.link}
                                key={item.name}
                            />
                        );
                    })}
                </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data: Omit<PortfolioItem, "blurDataURL">[] = (await import(".data/portfolio.json")).default;
    const items = await Promise.all(data.map(async (item: PortfolioItem) => { return { ...item, blurDataURL: (await getPlaiceholder(item.bannerURL)).base64 } }));

    return {
        props: { items },
    };
};
