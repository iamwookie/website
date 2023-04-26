import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import TextButton from "components/buttons/TextButton";
import Socials from "@components/Socials";
import Spotify from "@components/Spotify";
import Discord from "@lib/discord";

type Props = {
    discordTag?: string;
    avatarURL?: string;
};

export default function Home({ discordTag, avatarURL }: Props) {
    return (
        <>
            <Head>
                <title>( ͡° ͜ʖ ͡°)</title>
            </Head>

            {avatarURL && (
                    <Image
                        src={avatarURL}
                        width={100}
                        height={100}
                        alt="Avatar"
                        className="mx-auto w-36 rounded-full border-2"
                    />
                )}

                <h1 className="mt-2 text-2xl sm:text">Bilal</h1>
                <h2 className="mt-1 text-sm">Code | Media | Design</h2>
                <Image
                    src="/assets/pk_flag.svg"
                    width={24}
                    height={24}
                    alt="Pakistan Flag"
                    className="mt-2 mx-auto rounded-sm"
                />

                <p className="mt-4 py-4 border-y-2 text-base">
                    19
                    <br />
                    it is what it is
                    <br />✦
                </p>

                <div className="mt-4">
                    <Link href="/portfolio">
                        <TextButton>Portfolio</TextButton>
                    </Link>
                </div>

                <Socials discordTag={discordTag} />

                <Spotify />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const user = await Discord.fetchUser("244662779745665026");

    return {
        props: { discordTag: user?.tag ?? null },
        revalidate: 600
    };
};
