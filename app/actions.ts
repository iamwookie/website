'use server';

import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function incrementValentines() {
    try {
        await redis.incr('valentines:count');
    } catch (error) {
        console.error(error);
    }
}
