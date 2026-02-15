import type { ThoughtData } from '@/types';
import * as Tooltip from '@components/ui/Tooltip';
import { redis } from '@lib/redis';

const R_THOUGHTS_ACTIVE = 'web:thoughts:active';
const R_THOUGHTS_APPROVED = 'web:thoughts:approved';
const R_THOUGHTS_INDEX = 'web:thoughts:index';

function nextTimestamp(): number {
    const next = new Date();

    next.setUTCMinutes(0, 0, 0);
    next.setUTCHours(next.getUTCHours() + 1);

    return Math.floor(next.getTime() / 1000);
}

async function fetchThought(): Promise<ThoughtData> {
    let thought = await redis.get<ThoughtData>(R_THOUGHTS_ACTIVE);
    if (thought) return thought;

    const fallback: ThoughtData = {
        content: 'If you see this, life must be pretty good for you.',
        author: 'Bilal Baig',
        timestamp: Date.now(),
    };

    const length = await redis.llen(R_THOUGHTS_APPROVED);
    if (!length || length == 0) return fallback;

    const index = await redis.incr(R_THOUGHTS_INDEX);
    thought = await redis.lindex(R_THOUGHTS_APPROVED, -(((index - 1) % length) + 1)); // reverse order
    if (!thought) return fallback;

    await redis.set(R_THOUGHTS_ACTIVE, thought, { exat: nextTimestamp() });

    return thought;
}

export default async function Thought() {
    const thought = await fetchThought();

    const now = new Date().getTime() / 1000; // watch: possible impure function here, might be eslint bug
    const delta = nextTimestamp() - now;
    const minutes = Math.floor((delta % 3600) / 60);

    const plural = (num: number, word: string) => `${num} ${word}${num == 1 ? '' : 's'}`;

    const countdown = delta < 60 ? 'Updates in less than a minute' : `Updates in ${plural(minutes, 'minute')}`;

    return (
        <Tooltip.Provider>
            <Tooltip.Wrapper content={countdown}>
                <div className="flex max-w-4xl flex-col gap-2 transition-opacity hover:opacity-70">
                    <h1 className="text-center text-xl sm:text-2xl md:text-3xl">{thought.content}</h1>
                    <p className="text-center text-xs opacity-50 sm:text-sm md:text-base">{thought.author ?? 'Anonymous'}</p>
                </div>
            </Tooltip.Wrapper>
        </Tooltip.Provider>
    );
}
