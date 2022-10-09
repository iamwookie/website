import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/future/image';
import Link from 'next/link';

import Socials from '../components/Socials';
import Spotify from '../components/Spotify';
import Footer from '../components/Footer';

import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Discord from '../libs/discord';

export default function Home({ discordTag, avatarURL }) {
    const [musicData, setMusic] = useState(null);

    useEffect(() => {
        async function fetchPlaying() {
            const data = await fetch('/api/spotify/playing');
            const parsed = await data.json();
            setMusic(parsed);
        }

        fetchPlaying();

        let interval = setInterval(() => fetchPlaying(), 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Head>
                <title>( ͡° ͜ʖ ͡°)</title>
            </Head>

            <main className='grid min-h-screen place-items-center'>
                <div className='backdrop-blur-xl p-5 rounded-lg text-center text-white font-nunito animate__animated animate__fadeIn'>
                    {avatarURL && <Image src={avatarURL} width={100} height={100} alt='Avatar' className='mx-auto w-36 rounded-full border-2' />}

                    <h1 className='mt-2 text-2xl sm:text'>Bilal</h1>
                    <h2 className='mt-1 text-sm'>Code | Media | Design</h2>

                    <p className='mt-4 py-4 border-y-2 text-base'>
                        18<br />
                        working on life and a few other things<br />
                        check out some of that below<br />
                        ▼
                    </p>

                    <Link href='/portfolio'>
                        <div className='mt-4'>
                            <button className='rounded-lg px-2 border-2 hover:bg-white hover:text-black'>Portfolio</button>
                        </div>
                    </Link>

                    <Socials discordTag={discordTag} />

                    {musicData && <Spotify data={musicData.item} />}
                </div>

                <Footer />
            </main>

            <ToastContainer
                limit={3}
                theme='colored'
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

export async function getStaticProps() {
    const user = await Discord.fetchUser('244662779745665026');

    if (!user) return { props: {} };

    return {
        props: {
            discordTag: user.tag,
            avatarURL: user.avatarURL,
        },
        revalidate: 600,
    };
}