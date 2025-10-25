import { headers } from 'next/headers';
import { redis } from '@lib/redis';

import EyeIcon from '@public/assets/ui/eye-regular.svg';

const crawlers = ['bot', 'crawl', 'spider', 'vercel', 'google', 'facebook', 'slurp', 'bing', 'discord', 'slack'];

async function fetchViews(id: string, ff: string | null, ua: string | null): Promise<number> {
    const key = `views:${id}`;

    if (!ff || !ua) return (await redis.get<number>(key).catch(() => 0)) ?? 0;

    const ip = ff.split(',')[0].trim() || 'unknown';
    const bot = crawlers.some((crawler) => ua.toLowerCase().includes(crawler));

    if (ip == 'unknown' || bot) return (await redis.get<number>(key).catch(() => 0)) ?? 0;

    const query = `${key}:${ip}`;
    const viewed = await redis.get(query).catch(() => null);

    if (viewed) return (await redis.get<number>(key).catch(() => 0)) ?? 0;

    await redis.set(query, '1', { ex: 60 * 60 * 24 });

    return (await redis.incr(key).catch(() => 0)) ?? 0;
}

export default async function Views({ id }: { id: string }) {
    const reqHeaders = await headers();

    const ff = reqHeaders.get('x-forwarded-for');
    const ua = reqHeaders.get('user-agent');

    const views = await fetchViews(id, ff, ua);

    return (
        <span className="flex flex-row items-center justify-center gap-2">
            <EyeIcon width={16} height={16} fill="currentColor" /> {views.toLocaleString()}
        </span>
    );
}
