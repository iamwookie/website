declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // AUTH
            ACCESS_PASSWORD: string;
            // SESSION
            SESSION_PASSWORD: string;
            // SPOTIFY
            SPOTIFY_CLIENT_ID: string;
            SPOTIFY_CLIENT_SECRET: string;
            SPOTIFY_REFRESH_TOKEN: string;
            // UPSTASH
            UPSTASH_REDIS_REST_URL: string;
            UPSTASH_REDIS_REST_TOKEN: string;
        }
    }
}

export {};
