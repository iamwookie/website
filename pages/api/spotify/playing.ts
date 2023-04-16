import { NextApiRequest, NextApiResponse } from 'next';

import Spotify from 'libs/spotify';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.headers["sec-fetch-site"] !== "same-origin") return res.status(403).end("403 Forbidden");

    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).end('Method Not Allowed');
    }

    const data: SpotifyApi.CurrentlyPlayingObject = await Spotify.currentlyPlaying();

    res.status(200).json(data);
}