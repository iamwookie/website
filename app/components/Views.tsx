import crypto from 'crypto';

import { Redis } from '@upstash/redis';
import { headers } from 'next/headers';

import EyeIcon from '@public/assets/ui/eye-regular.svg';

const redis = Redis.fromEnv();

const crawlers = ['bot', 'crawl', 'spider', 'vercel', 'google', 'facebook', 'slurp', 'bing', 'discord', 'slack'];

async function fetchViews(id: string, ff: string | null, ua: string | null): Promise<number> {
    const viewsKey = `views:${id}`;

    if (!ff || !ua) return (await redis.get<number>(viewsKey).catch(() => 0)) ?? 0;

    const ipAddress = ff.split(',')[0].trim() || 'unknown';
    const userAgent = ua.toLowerCase();
    const isBot = crawlers.some((crawler) => userAgent.includes(crawler));

    if (ipAddress == 'unknown' || isBot) return (await redis.get<number>(viewsKey).catch(() => 0)) ?? 0;

    const ipHash = crypto.createHash('sha256').update(ipAddress).digest('hex');
    const uniqueKey = `view:${id}:${ipHash}`;
    const hasViewed = await redis.get(uniqueKey).catch(() => null);

    if (hasViewed) return (await redis.get<number>(viewsKey).catch(() => 0)) ?? 0;

    await redis.set(uniqueKey, '1', { ex: 60 * 60 * 24 });

    return (await redis.incr(viewsKey).catch(() => 0)) ?? 0;
}

export default async function Views({ id }: { id: string }) {
    const reqHeaders = await headers();

    const ff = reqHeaders.get('x-forwarded-for');
    const ua = reqHeaders.get('user-agent');

    const views = await fetchViews(id, ff, ua);

    return (
        <div className="flex flex-row items-center justify-center gap-2">
            <EyeIcon width={16} height={16} fill="currentColor" /> {views.toLocaleString()}
        </div>
    );
}
