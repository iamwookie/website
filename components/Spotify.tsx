import type { SpotifyData } from 'types';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function Spotify() {
    const [music, setMusic] = useState<SpotifyData | null>(null);
    const [fetchInterval, setFetchInterval] = useState<number>(10_000);

    useEffect(() => {
        async function fetchPlaying() {
            try {
                const res = await fetch('/api/spotify/playing');
                const data: SpotifyData | null = await res.json();

                if (data) {
                    setFetchInterval(2000);
                } else {
                    setFetchInterval(10_000);
                }

                setMusic(data);
            } catch (err) {
                console.error('Error fetching Spotify data.');
                console.error(err);
            }
        }

        fetchPlaying();

        const interval = setInterval(() => fetchPlaying(), fetchInterval);
        return () => clearInterval(interval);
    }, [fetchInterval]);

    if (!music) return null;

    const progress = (((music.progress ?? 0) / (music.duration ?? 0)) * 100).toFixed(1);

    return (
        <div className="inline-block">
            <a href={music.url} target="_blank" rel="noreferrer noopener" className="hover:opacity-75">
                <div className="overflow-hidden bg-darkslate rounded-md animate__animated animate__fadeIn">
                    <div className="flex">
                        {music.image && (
                            <Image src={music.image} width={80} height={80} alt="Album Cover" className="animate__animated animate__fadeIn" />
                        )}
                        <div className="flex flex-col flex-auto justify-center text-left mx-2">
                            <h1 className="my-auto text-sm">Listening to Spotify...</h1>
                            <h1 className="my-auto text-lg">{music.name}</h1>
                            <h1 className="my-auto text-sm text-spotify">{music.artists}</h1>
                        </div>
                        <FontAwesomeIcon icon={faSpotify} className="flex-2 self-center mr-4 text-spotify text-3xl" />
                    </div>
                    {music.duration && <div className="h-1 bg-spotify" style={{ width: `${progress}%` }} />}
                </div>
            </a>
        </div>
    );
}
