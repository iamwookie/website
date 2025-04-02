'use client';

import type { SpotifyData } from 'types';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@lib/utils';
import Image from 'next/image';

import SpotifyIcon from '@public/assets/icons/spotify.svg';

// TODO: Update tailwind to v4 and update config & animations

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
        <motion.a
            // motion props
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            // element props
            href={music.url}
            target="_blank"
            rel="noreferrer noopener"
            className="relative bg-zinc-900 shadow-lg rounded-xl overflow-hidden p-4 mx-auto"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-spotify/10 to-blue-500/10" />

            <div className="flex flex-row gap-4">
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
                                    width={48}
                                    height={48}
                                    placeholder="blur"
                                    blurDataURL={music.blurDataURL}
                                    className="rounded-full shadow-lg"
                                />
                            </motion.div>
                        )}

                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            className="absolute -right-2 -top-2 rounded-full bg-spotify p-1 shadow-lg"
                        >
                            <SpotifyIcon size={16} className="h-4 w-4 text-black" />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col justify-center gap-1 md:text-left"
                >
                    <h2 className="text-xs font-semibold text-green-400">Now Playing</h2>

                    <h3 className="font-medium text-xs text-white">{music.name}</h3>

                    <h3 className="text-xs text-gray-400">{music.artists}</h3>
                </motion.div>
            </div>
        </motion.a>
    );
}
