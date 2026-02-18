'use server';

import { headers } from 'next/headers';
import { z } from 'zod';

import { authLimiter } from '@lib/limiter';
import { getSession } from '@lib/session';
import { getClientIP } from '@lib/utils';

const schema = z.object({
    password: z.string(),
});

export type FormState = {
    success?: boolean;
    errors?: {
        errors: string[];
        properties?: {
            password?: { errors: string[] };
        };
    };
};

export async function login(_: FormState, formData: FormData): Promise<FormState> {
    const session = await getSession();

    const validated = schema.safeParse({
        password: formData.get('password'),
    });

    if (!validated.success) return { errors: z.treeifyError(validated.error) };

    const { success } = await authLimiter.limit(`login:${getClientIP(await headers())}`);
    if (!success) return { errors: { errors: ['You are submitting too many attempts.'] } };

    if (validated.data.password !== process.env.ACCESS_PASSWORD) return { errors: { errors: ['Incorrect password.'] } };

    session.authenticated = true;
    session.expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    await session.save();

    return { success: true };
}
