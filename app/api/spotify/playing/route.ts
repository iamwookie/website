import { NextResponse } from 'next/server';
import { rateLimiter } from '@api/middlewares/limiter.middleware';
import Spotify from '@lib/spotify';

export const revalidate = 0;

export async function GET() {
    const { success } = await rateLimiter.limit('spotify:playing');
    if (!success) return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 });

    const data = await Spotify.currentlyPlaying();
    return NextResponse.json(data ?? null, { headers: { 'Cache-Control': 'no-cache' } });
}
