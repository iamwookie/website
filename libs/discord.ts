import axios from "axios";

import { Stats } from "types";

class Discord {
    private static api = axios.create({
        baseURL: process.env.DISCORD_ENDPOINT,
        timeout: 3000,
    });

    static async fetchUser(id: string | number): Promise<any> {
        try {
            const { data } = await this.api.get(`/users/${id}`);
            return data;
        } catch (err) {
            console.error("[Discord] Error Fetching User");
            console.error(err.message);
        }
    }

    static async fetchStats(): Promise<Stats> {
        try {
            const { data } = await this.api.get<Stats>("/stats");
            return data;
        } catch (err) {
            console.error("[Discord] Error Fetching Stats");
            console.error(err.message);
        }
    }
}

export default Discord;
