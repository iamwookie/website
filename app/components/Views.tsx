import { headers } from 'next/headers';
import { Redis } from '@upstash/redis';

import EyeIcon from '@public/assets/ui/eye-regular.svg';

const redis = Redis.fromEnv();

export default async function Views() {
    const ipAddress = (await headers()).get('x-forwarded-for');
    const hasViewed = await redis.get(`views:index:${ipAddress}`);

    let views: number;

    if (!hasViewed) {
        await redis.set(`views:index:${ipAddress}`, '1', { ex: 60 * 60 * 24 }).catch(() => null);
        views = (await redis.incr('views:index').catch(() => 0)) || 0;
    } else {
        views = (await redis.get<number>('views:index').catch(() => 0)) || 0;
    }

    return (
        <div className="flex flex-row items-center justify-center gap-1">
            <EyeIcon width={16} height={16} fill="currentColor" /> {views}
        </div>
    );
}
