'use client';

import type { SpotifyData } from 'types';
import Image from 'next/image';
import { useReducer, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

type State = {
    music: SpotifyData | undefined;
    interval: number;
};

type Action = {
    type: 'SET_MUSIC' | 'ERROR';
    payload?: SpotifyData | undefined;
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_MUSIC':
            return {
                ...state,
                music: action.payload,
                interval: action.payload ? 2000 : 10_000,
            };
        case 'ERROR':
            return {
                ...state,
                music: undefined,
                interval: 10_000,
            };
        default:
            return state;
    }
}

export default function Spotify() {
    const [state, dispatch] = useReducer(reducer, { music: undefined, interval: 10_000 });

    useEffect(() => {
        const fetchPlaying = async () => {
            try {
                const res = await fetch('/api/spotify/playing');
                const data: SpotifyData = await res.json();
                dispatch({ type: 'SET_MUSIC', payload: data });
            } catch (err) {
                console.error('Error fetching Spotify data.');
                console.error(err);
                dispatch({ type: 'ERROR' });
            }
        };

        fetchPlaying();

        const intervalId = setInterval(() => fetchPlaying(), state.interval);
        return () => clearInterval(intervalId);
    }, [state.interval]);

    if (!state.music) return null;

    return (
        <div className="flex justify-center items-center mt-3">
            <a href={state.music.url} target="_blank" rel="noreferrer noopener" className="hover:opacity-75 mx-auto">
                <div className="overflow-hidden bg-darkslate rounded-md animate__animated animate__fadeIn">
                    <div className="flex">
                        {state.music.image && (
                            <Image
                                src={state.music.image}
                                width={80}
                                height={80}
                                alt="Album Cover"
                                placeholder="blur"
                                blurDataURL={state.music.blurDataURL}
                            />
                        )}
                        <div className="flex flex-col flex-auto justify-center text-left mx-2">
                            <h1 className="my-auto text-sm">Listening to Spotify...</h1>
                            <h1 className="my-auto text-lg">{state.music.name}</h1>
                            <h1 className="my-auto text-sm text-spotify">{state.music.artists}</h1>
                        </div>
                        <FontAwesomeIcon icon={faSpotify} className="flex-2 self-center mr-4 text-spotify text-3xl" />
                    </div>
                    {state.music.duration && (
                        <div
                            className="h-1 bg-spotify"
                            style={{ width: `${(((state.music.progress ?? 0) / (state.music.duration ?? 0)) * 100).toFixed(1)}%` }}
                        />
                    )}
                </div>
            </a>
        </div>
    );
}
