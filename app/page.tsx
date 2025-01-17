import type { Metadata } from 'next';

import Title from '@components/Title';
import Subtitle from '@components/Subtitle';
import Socials from '@components/Socials';
import Spotify from '@components/SpotifyNew';
import PortfolioButton from '@components/ui/PortfolioButton';

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
            <section className="flex flex-col justify-center items-center gap-6 container h-screen mx-auto">
                <h1 className="text-4xl">I get paid to make things</h1>
                <Socials />
                <Spotify />
            </section>
        </main>
    );
}
