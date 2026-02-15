import 'server-only';

import { Ratelimit } from '@upstash/ratelimit';

import { redis } from '@lib/redis';

export const spotifyLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(50, '1 s'),
    prefix: 'web:limiter:spotify',
    analytics: true,
});

export const authLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '1 m'),
    prefix: 'web:limiter:auth',
    analytics: true,
});

export const thoughtLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(1, '1 m'),
    prefix: 'web:limiter:thoughts',
    analytics: true,
});
