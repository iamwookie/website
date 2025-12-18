'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import useSWR from 'swr';

import SpotifyIcon from '@public/assets/icons/spotify.svg';
import type { SpotifyData } from 'types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// animation time: ~ 2.6s (first load), ~0.8s (subsequent updates)

export default function Spotify() {
    const [loaded, setLoaded] = useState(false);

    const { data, error } = useSWR<SpotifyData | null>('/api/spotify/playing', fetcher, {
        revalidateOnFocus: false,
        refreshInterval: 5_000,
    });

    if (!data || error) return null;

    const delay = loaded ? 0.2 : 2; // base delay for animations

    return (
        <motion.a
            layout
            whileHover={{ opacity: 0.5, scale: 1.05 }}
            whileTap={{ opacity: 0.5, scale: 0.95 }}
            href={data.url}
            target="_blank"
            rel="noreferrer noopener"
            className="relative mx-auto overflow-hidden rounded-xl bg-zinc-900 p-4 shadow-lg select-none"
        >
            {/* Background gradient */}
            <div className="from-spotify/10 absolute inset-0 bg-linear-to-br to-blue-500/10" />

            {/* Content */}
            <div className="flex flex-row gap-4">
                {/* Album cover and icon */}
                <div
                    key={data.image} // re-render only when the image changes
                    className="flex items-center justify-center"
                >
                    <div className="relative">
                        {data.image && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay, duration: 0.4 }}
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
                            transition={{ delay: delay + 0.2, duration: 0.4 }}
                            onAnimationComplete={() => setLoaded(true)}
                            // element props
                            className="bg-spotify absolute -top-2 -right-2 rounded-full p-1 shadow-lg"
                        >
                            <SpotifyIcon size={16} className="h-4 w-4 text-black" />
                        </motion.div>
                    </div>
                </div>

                {/* Track details */}
                <motion.div
                    key={`${data.name}-${data.artists}`} // dual key ensures re-render only when both name and artists change
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + 0.2, duration: 0.2 }}
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
