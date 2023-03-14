import { GetStaticProps } from "next";

import Head from "next/head";
import Image from "next/future/image";
import Layout from "components/Layout";
import TextButton from "components/buttons/TextButton";

import Tippy from "@tippyjs/react";

import Discord from "libs/discord";

import { Stats } from "types";

type Props = {
    avatarURL?: any;
    stats?: Stats;
};

export default function KAT({ avatarURL, stats }: Props) {
    return (
        <>
            <Head>
                <title>KAT</title>
                <meta name="theme-color" content="#C167ED" />
                <meta name="description" content="✨ A multi-purpose Discord bot providing solutions to most problems." />
                <meta property="og:title" content="KAT" key="title" />
                <meta property="og:description" content="✨ A multi-purpose Discord bot providing solutions to most problems." key="desc" />
            </Head>

            <Layout>
                {avatarURL && (
                    <Image
                        src={avatarURL}
                        width={100}
                        height={100}
                        alt="Avatar"
                        className="mx-auto w-36 rounded-full border-2"
                    />
                )}

                <h1 className="pt-2 text-2xl">KAT</h1>

                <div className="pt-2 pb-4">
                    <Tippy
                        content={`Currently serving ${stats?.guilds} servers with ${stats?.users} users.`}
                        theme="blur"
                        disabled={stats ? false : true}
                    >
                        <span
                            className={`cursor-default rounded-lg my-2 mx-auto px-2 border-2 ${
                                stats
                                    ? "text-green-500 border-green-500"
                                    : "text-red-500 border-red-500"
                            }`}
                        >
                            ● {stats ? "Online" : "Offline"}
                        </span>
                    </Tippy>
                </div>

                <p className="py-4 border-y-2 text-sm">
                    ✨ A multi-purpose Discord bot providing solutions to most problems.
                    <br />
                    🎵 KAT plays high quality music from YouTube and Spotify.
                    <br />
                </p>

                <div className="pt-2 text-lg">
                    <TextButton>
                        <a href="/kat/invite" target="_blank">
                            Invite
                        </a>
                    </TextButton>
                </div>
            </Layout>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const user = await Discord.fetchUser("916639727220846592");
    const stats = await Discord.fetchStats();

    return {
        props: { avatarURL: user?.avatarURL, stats },
        revalidate: 600,
    };
};
