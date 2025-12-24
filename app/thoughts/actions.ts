'use server';

import { headers } from 'next/headers';
import { z } from 'zod';

import type { ThoughtData } from '@/types';
import { thoughtLimiter } from '@lib/limiter';
import { redis } from '@lib/redis';

const schema = z.object({
    thought: z.string().min(8, 'Be more thoughtful (at least 8 characters)').max(256, 'Keep it concise (max 256 characters)'),
    author: z.string().max(128, "I don't need your autobiography (max 128 characters)"),
});

export type FormState = {
    success?: boolean;
    errors?: {
        errors: string[];
        properties?: {
            thought?: { errors: string[] };
            author?: { errors: string[] };
        };
    };
};

async function getClientIP(): Promise<string> {
    const headersList = await headers();

    const ff = headersList.get('x-forwarded-for');
    if (ff) return ff.split(',')[0].trim();

    const raddr = headersList.get('x-real-ip');
    if (raddr) return raddr.trim();

    return 'unknown';
}

export async function createThought(_: FormState, formData: FormData): Promise<FormState> {
    const validated = schema.safeParse({
        thought: formData.get('thought'),
        author: formData.get('author'),
    });

    if (!validated.success) return { errors: z.treeifyError(validated.error) };

    const ip = await getClientIP();
    const { success } = await thoughtLimiter.limit(`create:${ip}`);
    if (!success) return { errors: { errors: ['You are submitting too many thoughts.'] } };

    const { thought, author } = validated.data;

    try {
        await redis.lpush<ThoughtData>('web:thoughts:pending', { content: thought, author, timestamp: Date.now() });
    } catch (error) {
        return { errors: { errors: ['Well something definitely broke... try again later?'] } };
    }

    return { success: true };
}
