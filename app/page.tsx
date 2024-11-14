import type { Metadata } from 'next';

import Title from '@components/Title';
import Subtitle from '@components/Subtitle';
import Socials from '@components/Socials';
import Spotify from '@components/Spotify';
import PortfolioButton from '@components/ui/PortfolioButton';
import Footer from '@components/Footer';

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
        <>
            <main className="flex flex-col justify-center items-center h-screen p-5 text-center animate-fadeIn">
                <Title />
                <Subtitle />

                <div className="flex flex-col justify-center items-center gap-2">
                    <Socials />
                    <Spotify />
                    <PortfolioButton />
                </div>
            </main>

            <Footer className="fixed bottom-0" />
        </>
    );
}
