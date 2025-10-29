import { redis } from '@lib/redis';

type QuoteData = {
    content: string;
    author: string;
};

function nextTimestamp(): number {
    const now = new Date();

    const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 9, 0, 0, 0));
    if (now >= next) next.setUTCDate(next.getUTCDate() + 1);

    return Math.floor(next.getTime() / 1000);
}

async function fetchQuote(): Promise<QuoteData> {
    let quote = await redis.get<QuoteData>('quote:active');
    if (quote) return quote;

    const list = await redis.get<QuoteData[]>('quote:list');
    const index = await redis.incr('quote:index');

    if (list) {
        quote = list[index % list.length];
    } else {
        quote = {
            content: 'If you see this, life must be pretty good for you.',
            author: 'Bilal Baig',
        };
    }

    await redis.set('quote:active', quote, { exat: nextTimestamp() });

    return quote;
}

export default async function Quote() {
    const quote = await fetchQuote();

    return (
        <div className="flex flex-col gap-2 px-4">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl">{quote.content}</h1>
            <p className="text-center text-xs opacity-50 sm:text-sm md:text-base">{quote.author}</p>
        </div>
    );
}
