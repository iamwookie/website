import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Socials from '@components/Socials';
import Spotify from '@components/Spotify';
import Discord from '@lib/discord';
import { motion } from 'framer-motion';

export default function Home({ discordTag }: { discordTag?: string }) {
    return (
        <>
            <Head>
                <title>( ͡° ͜ʖ ͡°)</title>
            </Head>

            <h1 className="text-7xl lg:text-9xl">bilal mustafa</h1>

            <Socials discordTag={discordTag} />

            <div className="mt-3">
                <Spotify />
            </div>

            <div className="mt-3">
                <Link href="/portfolio">
                    <motion.button
                        className="block rounded-lg my-2 mx-auto px-2 border-2 hover:bg-white hover:text-black"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                    >
                        portfolio
                    </motion.button>
                </Link>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const user = await Discord.fetchUser('244662779745665026');

    return {
        props: { discordTag: user?.tag ?? null },
        revalidate: 600,
    };
};
