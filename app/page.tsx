import type { Metadata } from 'next';

import Socials from '@components/Socials';
import Button from '@components/ui/Button';

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
            <section className="container mx-auto flex h-screen flex-col items-center justify-center gap-4">
                <h1 className="text-4xl">cooking soon™</h1>

                <Socials />

                <a href="mailto:mail@bil.al">
                    <Button content="Contact" />
                </a>
            </section>
        </main>
    );
}
