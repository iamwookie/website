import { NextApiRequest, NextApiResponse } from 'next';
import Spotify from '@lib/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).end('Method Not Allowed');
    }

    const data = await Spotify.currentlyPlaying();

    if (data) {
        res.setHeader('Cache-Control', 'no-cache').status(200).json(data);
    } else {
        res.status(204).end();
    }
}
