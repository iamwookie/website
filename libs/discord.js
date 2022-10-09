import axios from 'axios';

class Discord {
    static api = axios.create({
        baseURL: 'https://cat.bil.al/',
        timeout: 3000,
    });

    static async fetchUser(id) {
        try {
            const { data } = await this.api.get(`users/${id}`);
            return data;
        } catch (err) {
            console.error('[Discord] Error Fetching User');
            console.error(err.message);
        }
    }
}

export default Discord;