import type { Metadata } from 'next';
import Link from 'next/link';

import ThoughtForm from '@/app/components/thoughts/ThoughtForm';

export const metadata: Metadata = {
    title: 'Thoughts',
    description: 'Share a thought with me.',
    openGraph: {
        title: 'Thoughts',
        description: 'Share a thought with me.',
    },
};

export default function Thoughts() {
    return (
        <main className="flex flex-col">
            <section className="container mx-auto flex min-h-dvh flex-col items-center justify-center gap-6 px-4">
                <h1 className="text-xl text-white sm:text-2xl md:text-3xl">Share a thought</h1>
                <h3 className="md:text-md max-w-md text-center text-xs text-white/70 sm:text-sm">
                    A thought is something that comes to mind and is worth sharing. It could be a quote, an idea, a feeling, or something
                    else. A thought is related to you, not me. Be thoughtful.
                </h3>
                <span className="text-center text-xs text-white/40">
                    Approved thoughts are shared{' '}
                    <Link href="/" className="text-white/60 transition-opacity hover:opacity-70">
                        here
                    </Link>
                    .
                </span>
                <ThoughtForm />
            </section>
        </main>
    );
}
