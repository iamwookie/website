import { Ratelimit } from '@upstash/ratelimit';
import { redis } from '@lib/redis';

export const rateLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(50, '1 s'),
    analytics: true,
    prefix: 'web:limiter',
});
