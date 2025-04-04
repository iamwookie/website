'use client';

import type { SpotifyData } from 'types';

import { useState } from 'react';
import useSWR from 'swr';
import { motion } from 'motion/react';
import Image from 'next/image';

import SpotifyIcon from '@public/assets/icons/spotify.svg';

// TODO: update tailwind to v4

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Spotify() {
    const [delay, setDelay] = useState(1.5);

    const { data: music, error } = useSWR<SpotifyData>('/api/spotify/playing', fetcher, {
        refreshInterval: 5_000,
        revalidateOnFocus: false,
    });

    if (!music || error) return null;

    return (
        <motion.a
            // motion props
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay } }}
            whileHover={{ opacity: 0.5, scale: 0.98 }}
            whileTap={{ opacity: 0.5, scale: 0.98 }}
            onAnimationComplete={() => setDelay(0)}
            // element props
            href={music.url}
            target="_blank"
            rel="noreferrer noopener"
            className="relative bg-zinc-900 rounded-xl shadow-lg overflow-hidden p-4 mx-auto"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-spotify/10 to-blue-500/10" />

            <div className="flex flex-row gap-4">
                <motion.div
                    // motion props
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 }}
                    // element props
                    className="flex items-center justify-center"
                >
                    <div className="relative">
                        {music.image && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.7, duration: 0.4 }}
                            >
                                <Image
                                    src={music.image}
                                    alt="Album Cover"
                                    width={52}
                                    height={52}
                                    placeholder="blur"
                                    blurDataURL={music.blurDataURL}
                                    className="rounded-xl shadow-lg"
                                />
                            </motion.div>
                        )}

                        <motion.div
                            // motion props
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.9, duration: 0.4 }}
                            // element props
                            className="absolute -right-2 -top-2 rounded-full bg-spotify p-1 shadow-lg"
                        >
                            <SpotifyIcon size={16} className="h-4 w-4 text-black" />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    // motion props
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9, duration: 0.2 }}
                    // element props
                    className="flex flex-col justify-center gap-1"
                >
                    <h3 className="text-xs font-semibold text-green-400">Now Playing</h3>
                    <h3 className="text-xs text-white font-medium ">{music.name}</h3>
                    <h3 className="text-xs text-gray-400">{music.artists}</h3>
                </motion.div>
            </div>
        </motion.a>
    );
}
