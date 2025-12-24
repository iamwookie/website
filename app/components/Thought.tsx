import type { ThoughtData } from '@/types';
import * as Tooltip from '@components/ui/Tooltip';
import { redis } from '@lib/redis';

const R_THOUGHTS_ACTIVE = 'web:thoughts:active';
const R_THOUGHTS_APPROVED = 'web:thoughts:approved';
const R_THOUGHTS_INDEX = 'web:thoughts:index';

function nextTimestamp(): number {
    const now = new Date();

    const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 9, 0, 0, 0));
    if (now >= next) next.setUTCDate(next.getUTCDate() + 1);

    return Math.floor(next.getTime() / 1000);
}

async function fetchThought(): Promise<ThoughtData> {
    let thought = await redis.get<ThoughtData>(R_THOUGHTS_ACTIVE);
    if (thought) return thought;

    const length = await redis.llen(R_THOUGHTS_APPROVED);
    if (!length || length == 0) {
        return {
            content: 'If you see this, life must be pretty good for you.',
            author: 'Bilal Baig',
            timestamp: Date.now(),
        };
    }

    const index = await redis.incr(R_THOUGHTS_INDEX);
    thought = await redis.lindex(R_THOUGHTS_APPROVED, (index - 1) % length);
    if (!thought) {
        return {
            content: 'If you see this, life must be pretty good for you.',
            author: 'Bilal Baig',
            timestamp: Date.now(),
        };
    }

    await redis.set(R_THOUGHTS_ACTIVE, thought, { exat: nextTimestamp() });

    return thought;
}

export default async function Thought() {
    const thought = await fetchThought();

    const now = new Date().getTime() / 1000; // watch: possible impure function here, might be eslint bug
    const diff = nextTimestamp() - now;
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);

    const plural = (num: number, word: string) => `${num} ${word}${num == 1 ? '' : 's'}`;

    const countdown =
        diff < 60
            ? 'User submitted thought. Updates in less than a minute'
            : hours > 0
              ? `User submitted thought. Updates in ${plural(hours, 'hour')} & ${plural(minutes, 'minute')}`
              : `User submitted thought. Updates in ${plural(minutes, 'minute')}`;

    return (
        <Tooltip.Provider>
            <Tooltip.Wrapper content={countdown}>
                <div className="flex flex-col gap-2 px-4">
                    <h1 className="text-center text-xl sm:text-2xl md:text-3xl">{thought.content}</h1>
                    <p className="text-center text-xs opacity-50 sm:text-sm md:text-base">{thought.author}</p>
                </div>
            </Tooltip.Wrapper>
        </Tooltip.Provider>
    );
}
