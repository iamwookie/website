import type { Metadata, Viewport } from 'next';

import { Redis } from '@upstash/redis';

import { default as ValentinesPrompt } from '@components/valentines/Prompt';

export const metadata: Metadata = {
    title: '💗',
    description: 'Will you be my special someone?',
    openGraph: {
        title: '💗',
        description: 'Will you be that special someone?',
    },
};

export const viewport: Viewport = {
    themeColor: '#ff69b4',
};

const redis = Redis.fromEnv();

export default async function Valentines() {
    let count = await redis.get<number>('valentines:count');

    if (!count) {
        await redis.set('valentines:count', 0);
        count = 0;
    }

    return (
        <div className="flex items-center justify-center min-h-screen overflow-hidden bg-black">
            <ValentinesPrompt count={count} />
        </div>
    );
}
