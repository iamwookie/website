'use server';

import { headers } from 'next/headers';
import { z } from 'zod';

import type { ThoughtData } from '@/types';
import { thoughtLimiter } from '@lib/limiter';
import { redis } from '@lib/redis';
import { getSession } from '@lib/session';
import { getClientIP } from '@lib/utils';

function sanitise(v: string): string {
    return v.replace(/\s+/g, ' ').trim();
}

const schema = z.object({
    thought: z
        .string()
        .transform((v) => sanitise(v))
        .pipe(z.string().min(8, 'Be more thoughtful (at least 8 characters)').max(256, 'Keep it concise (max 256 characters)')),
    author: z
        .string()
        .transform((v) => sanitise(v))
        .transform((v) => (v === '' ? undefined : v))
        .pipe(z.string().max(32, "I don't need your autobiography (max 32 characters)").optional()),
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

export async function createThought(_: FormState, formData: FormData): Promise<FormState> {
    const session = await getSession();

    if (!session.authenticated) {
        return { errors: { errors: ['You must be authenticated to submit a thought.'] } };
    }

    const validated = schema.safeParse({
        thought: formData.get('thought'),
        author: formData.get('author'),
    });

    if (!validated.success) return { errors: z.treeifyError(validated.error) };

    const { success } = await thoughtLimiter.limit(`create:${getClientIP(await headers())}`);
    if (!success) return { errors: { errors: ['You are submitting too many thoughts.'] } };

    const { thought, author } = validated.data;

    try {
        await redis.rpush<ThoughtData>('web:thoughts:approved', { content: thought, author, timestamp: Date.now() });
    } catch (error) {
        return { errors: { errors: ['Well something definitely broke... try again later?'] } };
    }

    return { success: true };
}
