import { spotifyLimiter } from '@lib/limiter';
import Spotify from '@lib/spotify';

export const revalidate = 0;

export async function GET(): Promise<Response> {
    const { success } = await spotifyLimiter.limit('playing');
    if (!success) return Response.json({ error: 'Too Many Requests' }, { status: 429 });

    const data = await Spotify.currentlyPlaying();
    return Response.json(data, { headers: { 'Cache-Control': 'no-cache' } });
}
