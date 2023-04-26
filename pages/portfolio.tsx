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

            <TechStack
                stack={[
                    { name: "JavaScript", bgColor: "#93810d", borderColor: "#f0Db4f" },
                    { name: "TypeScript", bgColor: "#003d66", borderColor: "#007acc" },
                    { name: "NodeJS", bgColor: "#345031", borderColor: "#68a063" },
                    { name: "React", bgColor: "#0486aa", borderColor: "#61dafb" },
                ]}
            />

            <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-1 mt-5">
                {items.map((item) => {
                    return <PortfolioCard name={item.name} description={item.description} bannerURL={item.bannerURL} blurDataURL={item.blurDataURL} link={item.link} key={item.name} />;
                })}
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data = (await import(".data/portfolio.json")).default;
    const items: PortfolioItem[] = await Promise.all(
        data.map(async (item: Omit<PortfolioItem, "blurDataURL">) => {
            return { ...item, blurDataURL: (await getPlaiceholder(item.bannerURL)).base64 };
        })
    );

    return {
        props: { items },
    };
};
