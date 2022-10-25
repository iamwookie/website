import { useState, useEffect } from 'react';
import Image from 'next/future/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function Spotify() {
    const [music, setMusic] = useState(null);

    useEffect(() => {
        async function fetchPlaying() {
            try {
                const data = await fetch('/api/spotify/playing');
                const parsed = await data.json();
                setMusic(parsed);
            } catch (err) {
                console.error('Error fetching Spotify data.');
                console.error(err);
            }
        }

        fetchPlaying();

        let interval = setInterval(() => fetchPlaying(), 5000);
        return () => clearInterval(interval);
    }, []);

    if (!music) return null;

    const data = music.item;

    const name = data.name;
    const image = data.album?.images[0]?.url;
    const url = data.external_urls?.spotify;

    let artists = [];

    for (const artist of data.artists) {
        artists.push(artist.name);
    }

    return (
        <div className='mt-4 pt-4 border-t-2'>
            <a href={url} target='_blank' rel='noreferrer' className='hover:opacity-75'>
                <div className='flex overflow-hidden bg-darkslate rounded-md animate__animated animate__fadeIn'>
                    <Image src={image} width={80} height={80} alt='Album Cover' />
                    <div className='flex flex-col flex-auto justify-center text-left mx-2'>
                        <h1 className='my-auto text-sm'>Listening on Spotify...</h1>
                        <h1 className='my-auto text-lg'>{name}</h1>
                        <h1 className='my-auto text-sm text-spotify'>{artists.join(', ')}</h1>
                    </div>
                    <FontAwesomeIcon icon={faSpotify} className='flex-2 self-center mr-4 text-spotify text-3xl' />
                </div>
            </a>
        </div>
    );
}
