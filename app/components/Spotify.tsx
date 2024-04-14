'use client';

import type { SpotifyData } from 'types';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center mt-3"
        >
            <a href={music.url} target="_blank" rel="noreferrer noopener" className="mx-auto hover:opacity-75 transition-opacity">
                <div className="overflow-hidden bg-darkslate rounded-md">
                    <div className="flex">
                        {music.image && (
                            <Image src={music.image} width={80} height={80} alt="Album Cover" placeholder="blur" blurDataURL={music.blurDataURL} />
                        )}

                        <div className="flex flex-col flex-auto justify-center text-left mx-2">
                            <h1 className="my-auto text-sm">Listening to Spotify...</h1>
                            <h1 className="my-auto text-lg">{music.name}</h1>
                            <h1 className="my-auto text-sm text-spotify">{music.artists}</h1>
                        </div>

                        <SpotifyIcon width={32} height={32} fill="currentColor" className="flex-2 self-center mr-4 text-spotify" />
                    </div>
                </div>
            </a>
        </motion.div>
    );
}
