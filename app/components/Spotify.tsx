'use client';

import type { SpotifyData } from 'types';

import { useState } from 'react';
import useSWR from 'swr';
import { motion } from 'motion/react';

import Image from 'next/image';

import SpotifyIcon from '@public/assets/icons/spotify.svg';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Spotify({ initial }: { initial: SpotifyData | null }) {
    const [loaded, setLoaded] = useState(false);

    const { data, error } = useSWR<SpotifyData | null>('/api/spotify/playing', fetcher, {
        fallbackData: initial,
        refreshInterval: 5_000,
        revalidateOnFocus: false,
    });

    if (!data || error) return null;

    return (
        <motion.a
            // motion props'
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: loaded ? 0 : 2 } }}
            whileHover={{ opacity: 0.5, scale: 0.98 }}
            whileTap={{ opacity: 0.5, scale: 0.98 }}
            // element props
            href={data.url}
            target="_blank"
            rel="noreferrer noopener"
            className="relative mx-auto overflow-hidden rounded-xl bg-zinc-900 p-4 shadow-lg"
        >
            <div className="from-spotify/10 absolute inset-0 bg-linear-to-br to-blue-500/10" />

            <div className="flex flex-row gap-4">
                <motion.div
                    // motion props
                    // re-render only when the image changes
                    key={data.image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: loaded ? 0 : 2.2 }}
                    // element props
                    className="flex items-center justify-center"
                >
                    <div className="relative">
                        {data.image && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: loaded ? 0.2 : 2.2, duration: 0.4 }}
                            >
                                <Image
                                    src={data.image}
                                    alt="Album Cover"
                                    width={52}
                                    height={52}
                                    placeholder="blur"
                                    blurDataURL={data.blurDataURL}
                                    className="rounded-xl shadow-lg"
                                />
                            </motion.div>
                        )}

                        <motion.div
                            // motion props
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: loaded ? 0.4 : 2.4, duration: 0.4 }}
                            // element props
                            className="bg-spotify absolute -top-2 -right-2 rounded-full p-1 shadow-lg"
                        >
                            <SpotifyIcon size={16} className="h-4 w-4 text-black" />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    // motion props
                    // dual key ensures re-render only when both name and artists change
                    key={`${data.name}-${data.artists}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: loaded ? 0.4 : 2.4, duration: 0.2 }}
                    // set the loaded flag here as its the last element to animate
                    onAnimationComplete={() => setLoaded(true)}
                    // element props
                    className="flex flex-col justify-center gap-1"
                >
                    <h3 className="text-xs font-semibold text-green-400">Now Playing</h3>
                    <h3 className="text-xs font-medium text-white">{data.name}</h3>
                    <h3 className="text-xs text-gray-400">{data.artists}</h3>
                </motion.div>
            </div>
        </motion.a>
    );
}
