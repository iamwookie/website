import type { DiscordUser } from 'types';
import axios from 'axios';

class Discord {
    private static api = axios.create({
        baseURL: process.env.DISCORD_ENDPOINT,
        timeout: 3000,
    });

    static async fetchUser(id: string | number): Promise<DiscordUser | undefined> {
        try {
            const { data } = await this.api.get<DiscordUser>(`/users/${id}`);
            return data;
        } catch (err) {
            console.error('[Discord] Error Fetching User');
            console.error(err);
        }
    }
}

export default Discord;
