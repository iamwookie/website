import type { Metadata } from 'next';

import Title from '@components/Title';
import Subtitle from '@components/Subtitle';
import Socials from '@components/Socials';
import Spotify from '@components/Spotify';
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
            <section className="flex justify-center items-center container h-screen mx-auto">Hello</section>
        </main>
    );
}
