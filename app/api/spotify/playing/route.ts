import { NextRequest, NextResponse } from 'next/server';
import Spotify from 'app/lib/spotify';

export async function GET() {
    const data = await Spotify.currentlyPlaying();
    if (!data) return new NextResponse(undefined, { status: 204 });

    return NextResponse.json(data, {
        headers: {
            'Cache-Control': 'no-cache',
        },
    });
}
