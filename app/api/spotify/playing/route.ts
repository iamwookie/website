import { rateLimiter } from '@api/middlewares/limiter.middleware';
import Spotify from '@lib/spotify';

export const revalidate = 0;

export async function GET() {
    const { success } = await rateLimiter.limit('spotify:playing');
    if (!success) return Response.json({ error: 'Too Many Requests' }, { status: 429 });

    const data = (await Spotify.currentlyPlaying()) ?? null;
    return Response.json(data, { headers: { 'Cache-Control': 'no-cache' } });
}
