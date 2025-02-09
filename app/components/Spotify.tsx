'use client';

import type { SpotifyData } from 'types';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

import SpotifyIcon from '../../public/assets/icons/spotify.svg';

export default function Spotify() {
    const [music, setMusic] = useState<SpotifyData | null>(null);

    useEffect(() => {
        const fetchPlaying = async () => {
            try {
                const res = await fetch('/api/spotify/playing');
                const data: SpotifyData = await res.json();
                setMusic(data);
            } catch (err) {
                console.error('Error fetching Spotify data.');
                console.error(err);
                setMusic(null);
            }
        };

        fetchPlaying();

        const intervalId = setInterval(() => fetchPlaying(), 5_000);
        return () => clearInterval(intervalId);
    }, []);

    if (!music) return null;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <a href={music.url} target="_blank" rel="noreferrer noopener" className="hover:opacity-75 transition-opacity">
                <div className="flex bg-black/75 rounded-full overflow-hidden">
                    {music.image && (
                        <Image
                            src={music.image}
                            alt="Album Cover"
                            width={80}
                            height={80}
                            placeholder="blur"
                            blurDataURL={music.blurDataURL}
                            className="rounded-full p-2"
                        />
                    )}

                    <div className="flex flex-col flex-auto justify-center items-center">
                        <h2 className="text-xs">Listening to Spotify...</h2>
                        <h1 className={music.name && music.name.length > 24 ? 'text-sm md:text-lg' : 'text-lg'}>{music.name}</h1>
                        <h2 className="text-spotify text-sm">{music.artists}</h2>
                    </div>

                    <SpotifyIcon width={40} height={40} fill="currentColor" className="self-center mx-4 text-spotify" />
                </div>
            </a>
        </motion.div>
    );
}
