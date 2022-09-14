import Image from 'next/future/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function Spotify({ music }) {
    const name = music.name;
    const image = music.album?.images[0]?.url;
    const url = music.external_urls?.spotify;

    let artists = [];

    for (const artist of music.artists) {
        artists.push(artist.name);
    }

    return (
        <div className='mt-4 pt-4 border-t-2'>
            <a href={url} target='_blank' rel='noreferrer' className='hover:opacity-75'>
                <div className='flex overflow-hidden bg-darkslate rounded-md animate__animated animate__fadeIn'>
                    <Image src={image} width={80} height={80} />
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
