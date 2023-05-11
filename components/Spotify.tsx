import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function Spotify() {
    const [music, setMusic] = useState<SpotifyApi.CurrentlyPlayingObject | null>(null);

    useEffect(() => {
        async function fetchPlaying() {
            try {
                const res = await fetch("/api/spotify/playing");
                const data: SpotifyApi.CurrentlyPlayingObject = await res.json();
                setMusic(data);
            } catch (err) {
                console.error("Error fetching Spotify data.");
                console.error(err);
            }
        }

        fetchPlaying();

        const interval = setInterval(() => fetchPlaying(), 1000);
        return () => clearInterval(interval);
    }, []);

    if (!music || !music.item) return null;

    const data = music.item as SpotifyApi.TrackObjectFull;

    const name = data.name;
    const image = data.album?.images[0]?.url;
    const url = data.external_urls?.spotify;

    const progress = ((music.progress_ms ?? 0 / data.duration_ms) * 100).toFixed(1);

    let artists = [];

    for (const artist of data.artists) {
        artists.push(artist.name);
    }

    return (
        <div className="mt-4 pt-4 border-t-2">
            <a href={url} target="_blank" rel="noreferrer noopener" className="hover:opacity-75">
                <div className="overflow-hidden bg-darkslate rounded-md animate__animated animate__fadeIn">
                    <div className="flex">
                        <Image src={image} width={80} height={80} alt="Album Cover" className="animate__animated animate__fadeIn" />
                        <div className="flex flex-col flex-auto justify-center text-left mx-2">
                            <h1 className="my-auto text-sm">Listening to Spotify...</h1>
                            <h1 className="my-auto text-lg">{name}</h1>
                            <h1 className="my-auto text-sm text-spotify">{artists.join(", ")}</h1>
                        </div>
                        <FontAwesomeIcon icon={faSpotify} className="flex-2 self-center mr-4 text-spotify text-3xl" />
                    </div>
                    <div className="h-1 bg-spotify" style={{ width: `${progress}%` }} />
                </div>
            </a>
        </div>
    );
}
