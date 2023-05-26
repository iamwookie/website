import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import TextButton from 'components/buttons/TextButton';
import Socials from '@components/Socials';
import Spotify from '@components/Spotify';
import Discord from '@lib/discord';

type Props = {
    discordTag?: string;
    avatarURL?: string;
};

export default function Home({ discordTag }: Props) {
    return (
        <>
            <Head>
                <title>( ͡° ͜ʖ ͡°)</title>
            </Head>

            <h1 className="text-7xl lg:text-9xl">Bilal Mustafa</h1>

            <Socials discordTag={discordTag} />

            <div className="mt-3">
                <Spotify />
            </div>

            <div className="mt-3">
                <Link href="/portfolio">
                    <TextButton>Portfolio</TextButton>
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
