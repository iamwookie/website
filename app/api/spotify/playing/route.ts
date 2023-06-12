import { NextResponse } from 'next/server';
import Spotify from 'app/lib/spotify';

export const revalidate = 0;

export async function GET() {
    const data = await Spotify.currentlyPlaying();
    if (!data) return new NextResponse(null, { status: 204 });

    return NextResponse.json(data, {
        headers: {
            'Cache-Control': 'no-cache',
        },
    });
}
