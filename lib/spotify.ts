import axios from "axios";
import qs from "qs";

class Spotify {
    private static api = axios.create({
        baseURL: "https://api.spotify.com/v1",
    });

    private static accounts = axios.create({
        baseURL: "https://accounts.spotify.com",
    });

    private static clientId: string = process.env.SPOTIFY_CLIENT_ID;
    private static clientSecret: string = process.env.SPOTIFY_CLIENT_SECRET;

    private static refresh_token: string = process.env.SPOTIFY_REFRESH_TOKEN;
    private static access_token: string;

    private static async refreshToken(): Promise<void> {
        try {
            const { data } = await this.accounts.post(
                "/api/token",
                qs.stringify({
                    grant_type: "refresh_token",
                    refresh_token: this.refresh_token,
                }),
                {
                    auth: {
                        username: this.clientId,
                        password: this.clientSecret,
                    },
                }
            );

            this.access_token = data.access_token;

            setTimeout(() => {
                this.access_token = null;
            }, data.expires_in * 1000);
        } catch (err) {
            console.error("[Spotify] Error Refreshing Token");
            console.error(err.message);
        }
    }

    static async currentlyPlaying(): Promise<SpotifyApi.CurrentlyPlayingObject> {
        if (!this.access_token) await this.refreshToken();

        try {
            const { data } = await this.api.get(
                "/me/player/currently-playing",
                {
                    headers: {
                        Authorization: `Bearer ${this.access_token}`,
                    },
                }
            );

            return data;
        } catch (err) {
            console.error("[Spotify] Error Getting Currently Playing");
            console.error(err.message);

            return null;
        }
    }
}

export default Spotify;
