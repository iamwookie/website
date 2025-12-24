import { headers } from 'next/headers';
import { redis } from '@lib/redis';

import EyeIcon from '@public/assets/ui/eye-regular.svg';

const crawlers = ['bot', 'crawl', 'spider', 'vercel', 'google', 'facebook', 'slurp', 'bing', 'discord', 'slack'];

async function fetchViews(id: string, ff: string | null, rip: string | null, ua: string | null): Promise<number> {
    const key = `views:${id}`;

    const fetchCount = async () => (await redis.get<number>(key).catch(() => 0)) ?? 0;

    if (!ff && !rip && !ua) return await fetchCount();

    const ip = ff?.split(',')[0].trim() || rip || 'unknown';
    const bot = crawlers.some((crawler) => ua?.toLowerCase().includes(crawler));
    if (ip == 'unknown' || bot) return await fetchCount();

    const query = `${key}:${ip}`;
    const set = await redis.set(query, '1', { ex: 60 * 60 * 24, nx: true });
    if (!set) return await fetchCount();

    return (await redis.incr(key).catch(() => 0)) ?? 0;
}

export default async function Views({ id }: { id: string }) {
    const headersList = await headers();

    const ff = headersList.get('x-forwarded-for');
    const rip = headersList.get('x-real-ip');
    const ua = headersList.get('user-agent');

    const views = await fetchViews(id, ff, rip, ua);

    return (
        <span className="flex flex-row items-center justify-center gap-2">
            <EyeIcon width={16} height={16} fill="currentColor" /> {views.toLocaleString()}
        </span>
    );
}
