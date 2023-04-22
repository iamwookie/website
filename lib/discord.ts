import axios from "axios";

class Discord {
    private static api = axios.create({
        baseURL: process.env.DISCORD_ENDPOINT,
        timeout: 3000,
    });

    static async fetchUser(id: string | number) {
        try {
            const { data } = await this.api.get(`/users/${id}`);
            return data;
        } catch (err) {
            console.error("[Discord] Error Fetching User");
            console.error(err.message);
        }
    }
}

export default Discord;
