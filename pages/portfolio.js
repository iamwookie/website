import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PortfolioCard from '../components/portfolio/PortfolioCard';

import items from '../.data/portfolio.json';


export default function Portfolio() {
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
                <title>My Portfolio</title>
            </Head>

            <main className='grid h-screen place-items-center'>
                <div className='backdrop-blur-xl p-5 rounded-lg text-center text-white font-nunito animate__animated animate__fadeIn'>
                    <h1 className='text-2xl'>My Portfolio</h1>
                    <h5 className='text-sm'>(stuff I made)</h5>

                    <Link href='/'>
                        <button className='mt-2 px-2 rounded-lg border-2 hover:bg-white hover:text-black'>Home</button>
                    </Link>

                    <div className='grid gap-5 lg:grid-cols-2 md:grid-cols-1 mt-5'>
                        {items.map(item => {
                            return <PortfolioCard name={item.name} description={item.description} bannerURL={item.bannerURL} link={item.link} key={item} />;
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}