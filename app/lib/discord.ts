import type { DiscordUser } from 'types';
import axios from 'axios';

class Discord {
    static async fetchUser(id: string | number): Promise<DiscordUser | undefined> {
        try {
            const res = await fetch(process.env.DISCORD_ENDPOINT + `/users/${id}`, { next: { revalidate: 300 } });
            return await res.json();
        } catch (err) {
            console.error('[Discord] Error Fetching User');
            console.error(err);
        }
    }
}

export default Discord;
