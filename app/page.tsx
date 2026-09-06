import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import ThoughtLoading from '@/app/components/thoughts/Loading';
import Thought from '@/app/components/thoughts/Thought';
import Socials from '@components/Socials';
import Button from '@components/ui/Button';

const Spotify = dynamic(() => import('./components/Spotify')); // lazy loaded
const Views = dynamic(() => import('./components/views/Views')); // lazy loaded

export const metadata: Metadata = {
    title: '( ͡° ͜ʖ ͡°)',
    description: 'A person on this planet.',
    openGraph: {
        title: '( ͡° ͜ʖ ͡°)',
        description: 'A person on this planet.',
    },
};

export default function Home() {
    return (
        <main className="flex flex-col">
            <section className="container mx-auto flex min-h-dvh flex-col items-center justify-center gap-4 px-4">
                <Suspense fallback={<ThoughtLoading />}>
                    <Thought />
                </Suspense>

                <Socials />

                <a href="mailto:mail@bil.al" aria-label="Contact via Email">
                    <Button>Contact</Button>
                </a>

                <Views id="index" />

                <Spotify />
            </section>
        </main>
    );
}
