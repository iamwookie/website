import { createHmac } from 'node:crypto';

import { checkBotId } from 'botid/server';

import { redis } from '@lib/redis';
import { getClientIP } from '@lib/utils';

const R_VIEWS = 'web:views';
const VIEW_TTL_SECONDS = 60 * 60 * 24;
const ALLOWED_VIEW_IDS = new Set(['index']);

const INCREMENT_VIEW_SCRIPT = `
local inserted = redis.call('SET', KEYS[2], '1', 'EX', ARGV[1], 'NX')

if inserted then
    return redis.call('INCR', KEYS[1])
end

return tonumber(redis.call('GET', KEYS[1]) or '0')
`;

function key(id: string): string {
    return `${R_VIEWS}:${id}`;
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }): Promise<Response> {
    const verification = await checkBotId();
    if (verification.isBot) return Response.json({ error: 'No bots allowed.' }, { status: 403 });

    const { id } = await params;
    if (!ALLOWED_VIEW_IDS.has(id)) return Response.json({ error: 'Invalid view id.' }, { status: 400 });

    const ip = getClientIP(request.headers);
    const hash = createHmac('sha256', process.env.SESSION_PASSWORD).update(`views:${ip}`).digest('hex');

    try {
        const views = await redis.eval(INCREMENT_VIEW_SCRIPT, [key(id), `${key(id)}:${hash}`], [VIEW_TTL_SECONDS]);
        if (typeof views !== 'number') throw new Error('Unexpected view count response');
        return Response.json({ views });
    } catch {
        return Response.json({ error: 'Unable to update views.' }, { status: 503 });
    }
}
