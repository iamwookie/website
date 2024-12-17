'use client';

import type { SpotifyData } from 'types';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@lib/utils';
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
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-md bg-zinc-900 shadow-lg rounded-2xl overflow-hidden p-6"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-spotify/10 to-blue-500/10" />

            <div className="flex flex-col md:flex-row gap-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-center"
                >
                    <div className="relative">
                        {music.image && (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <Image
                                    src={music.image}
                                    alt="Album Cover"
                                    width={96}
                                    height={96}
                                    placeholder="blur"
                                    blurDataURL={music.blurDataURL}
                                    className="rounded-lg shadow-lg w-"
                                />
                            </motion.div>
                        )}

                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            className="absolute -right-2 -top-2 rounded-full bg-spotify p-2 shadow-lg"
                        >
                            <SpotifyIcon size={16} className="h-4 w-4 text-black" />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col justify-center gap-1 text-center md:text-left"
                >
                    <h2 className="text-lg font-semibold text-green-400">Now Playing</h2>

                    <h3 className={cn(' max-w-xs font-medium text-white', music.name && music.name.length > 24 ? 'text-sm md:text-lg' : 'text-lg')}>
                        {music.name}
                    </h3>

                    <h3 className="text-sm text-gray-400">{music.artists}</h3>
                </motion.div>
            </div>
        </motion.div>
    );
}
