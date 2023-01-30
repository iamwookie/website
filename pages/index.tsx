import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Socials from "../components/Socials";
import Spotify from "../components/Spotify";

import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Discord from "../libs/discord";

import type { GetStaticProps } from "next";

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
                    18
                    <br />
                    it is what it is
                    <br />✦
                </p>

                <div className="mt-4">
                    <Link href="/portfolio">
                        <Button>Portfolio</Button>
                    </Link>
                    <Link href="/kat">
                        <Button>KAT</Button>
                    </Link>
                </div>

                <Socials discordTag={discordTag} />

                <Spotify />
            </Layout>

            <ToastContainer
                limit={3}
                theme="colored"
                transition={Flip}
                position="bottom-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
            />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const user = await Discord.fetchUser("244662779745665026");

    if (!user) return { props: {} };

    return {
        props: { discordTag: user.tag },
        revalidate: 600
    };
};
