import { useState, useEffect } from 'react';
import Head from 'next/head';
import Card from '../components/Card';

import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Discord from '../libs/discord';

export default function Home({ discordTag, profileURL }) {
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

            <main className='grid h-screen place-items-center'>
                <Card discordTag={discordTag} profileURL={profileURL} musicData={musicData} />
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

export async function getServerSideProps() {
    const user = await Discord.fetchUser('244662779745665026');

    if (!user) return { props: {} };

    return {
        props: {
            discordTag: user.tag,
            profileURL: user.avatarURL,
        }
    };
}