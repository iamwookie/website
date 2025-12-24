import type { Metadata } from 'next';

import ThoughtForm from '@components/ui/ThoughtForm';

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
                <ThoughtForm />
            </section>
        </main>
    );
}
