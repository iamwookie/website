import 'server-only';

import qs from 'querystring';

import { getPlaiceholder } from 'plaiceholder';

import { redis } from '@/lib/redis';
import type { SpotifyData } from '@/types';

const R_SPOTIFY_REFRESH_TOKEN = 'web:spotify:refresh_token';

class Spotify {
    private static clientId: string = process.env.SPOTIFY_CLIENT_ID;
    private static clientSecret: string = process.env.SPOTIFY_CLIENT_SECRET;
    private static refreshToken?: string;
    private static accessToken?: string;

    private static async fetchRefreshToken(): Promise<void> {
        try {
            const token = await redis.get<string>(R_SPOTIFY_REFRESH_TOKEN);
            if (token) this.refreshToken = token;
        } catch (err) {
            console.error('[Spotify] Failed To Fetch Refresh Token');
            console.error(err);
        }
    }

    private static async refreshAccessToken(): Promise<void> {
        if (!this.refreshToken) {
            console.warn('[Spotify] No Refresh Token Found, Fetching...');
            this.fetchRefreshToken();
            return;
        }

        try {
            const res = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                body: qs.stringify({
                    grant_type: 'refresh_token',
                    refresh_token: this.refreshToken,
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${btoa(`${this.clientId}:${this.clientSecret}`)}`,
                },
                cache: 'no-cache',
            });

            if (res.status !== 200) {
                if (res.status == 400) {
                    console.error('[Spotify] Invalid Refresh Token, Fetching...');
                    this.fetchRefreshToken();
                    return;
                }

                return;
            }

            const data = await res.json();
            this.accessToken = data.access_token;

            setTimeout(() => (this.accessToken = undefined), data.expires_in * 1000);
        } catch (err) {
            console.error('[Spotify] Failed To Refresh Token');
            console.error(err);
        }
    }

    static async currentlyPlaying(): Promise<SpotifyData | null> {
        if (!this.accessToken) await this.refreshAccessToken();

        try {
            const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: { Authorization: `Bearer ${this.accessToken}` },
                cache: 'no-cache',
            });

            if (res.status != 200) return null;

            const data = await res.json();
            if (!data?.item) return null;

            const imageRes = await fetch(data.item.album?.images[0]?.url, { next: { revalidate: data.item.duration_ms / 1000 } });
            const buffer = Buffer.from(await imageRes.arrayBuffer());
            const { base64 } = await getPlaiceholder(buffer);

            return {
                url: data.item.external_urls.spotify,
                name: data.item.name,
                image: data.item.album?.images[0]?.url,
                artists: data.item.artists.map((artist: any) => artist.name).join(', '),
                blurDataURL: base64,
            };
        } catch (err) {
            console.error('[Spotify] Failed To Fetch Currently Playing');
            console.error(err);
            return null;
        }
    }
}

export { Spotify };
