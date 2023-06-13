import { NextRequest, NextResponse } from 'next/server';
import Spotify from 'app/lib/spotify';
import { rateLimiter } from '@api/middlewares/limiter.middleware';

export const revalidate = 0;

export async function GET(req: NextRequest) {
    const ip = req.ip ?? req.headers.get('x-real-ip') ?? req.headers.get('x-forwarded-for') ?? 'global';
    const { success } = await rateLimiter.limit(ip);
    if (!success) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });

    const data = await Spotify.currentlyPlaying();
    return NextResponse.json(data ?? null, { headers: { 'Cache-Control': 'no-cache' } });
}
