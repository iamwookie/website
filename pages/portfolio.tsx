import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import Button from "../components/Button";
import PortfolioCard from "../components/portfolio/PortfolioCard";

import type { GetStaticProps } from "next";

export default function Portfolio({ items }) {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Layout>
                <h1 className="text-2xl">Portfolio</h1>
                <h5 className="text-sm">{"(stuff i've achieved)"}</h5>

                <div className="mt-2">
                    <Link href="/">
                        <Button>Home</Button>
                    </Link>
                </div>

                <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-1 mt-5">
                    {items.map((item) => {
                        return (
                            <PortfolioCard
                                name={item.name}
                                description={item.description}
                                bannerURL={item.bannerURL}
                                link={item.link}
                                key={item}
                            />
                        );
                    })}
                </div>
            </Layout>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await import("../.data/portfolio.json");

    return {
        props: { items: data.default },
    };
};
