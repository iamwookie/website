import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import Layout from "components/Layout";
import PortfolioCard from "components/portfolio/PortfolioCard";
import BackButton from "components/buttons/BackButton";

import { PortfolioItem } from "types";

export default function Portfolio({ items }: { items: PortfolioItem[] }) {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Layout>
                <Link href="/">
                    <BackButton />
                </Link>
                
                <h1 className="text-2xl">Portfolio</h1>
                <h5 className="text-sm">{"(projects & stuff)"}</h5>

                <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-1 mt-5">
                    {items.map(item => {
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
            </Layout>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await import(".data/portfolio.json");

    return {
        props: { items: data.default },
    };
};
