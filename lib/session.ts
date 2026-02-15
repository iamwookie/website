import 'server-only';

import type { SessionOptions } from 'iron-session';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

export interface SessionData {
    authenticated: boolean;
    expiresAt: number;
}

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_PASSWORD,
    cookieName: 'session',
    cookieOptions: { secure: process.env.NODE_ENV == 'production', sameSite: 'lax' },
};

export async function getSession() {
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
    if (!session.expiresAt || session.expiresAt < Date.now()) session.authenticated = false;
    return session;
}
