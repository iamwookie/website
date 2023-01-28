import axios, { AxiosInstance } from 'axios';

class Discord {
    private static api: AxiosInstance = axios.create({
        baseURL: 'http://145.239.205.161:3030/',
        timeout: 3000,
    });

    static async fetchUser(id: string | number): Promise<any> {
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