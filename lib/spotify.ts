import type { SpotifyData } from 'types';
import { getPlaiceholder } from 'plaiceholder';
import qs from 'querystring';

class Spotify {
    private static clientId: string = process.env.SPOTIFY_CLIENT_ID;
    private static clientSecret: string = process.env.SPOTIFY_CLIENT_SECRET;
    private static refresh_token: string = process.env.SPOTIFY_REFRESH_TOKEN;
    private static access_token?: string;

    private static async refreshToken(): Promise<void> {
        try {
            const res = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                body: qs.stringify({
                    grant_type: 'refresh_token',
                    refresh_token: this.refresh_token,
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${btoa(`${this.clientId}:${this.clientSecret}`)}`,
                },
                cache: 'no-cache',
            });

            if (res.status != 200) return;

            const data = await res.json();
            this.access_token = data.access_token;

            setTimeout(() => (this.access_token = undefined), data.expires_in * 1000);
        } catch (err) {
            console.error('[Spotify] Failed to refresh token');
            console.error(err);
        }
    }

    static async currentlyPlaying(): Promise<SpotifyData | undefined> {
        if (!this.access_token) await this.refreshToken();

        try {
            const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: { Authorization: `Bearer ${this.access_token}` },
                cache: 'no-cache',
            });

            if (res.status != 200) return;

            const data = await res.json();
            if (!data?.item) return;

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
            console.error('[Spotify] Failed to fetch currently playing');
            console.error(err);
        }
    }
}

export default Spotify;
