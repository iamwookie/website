import type { Metadata } from 'next';

import Title from '@components/Title';
import Socials from '@components/Socials';
import Spotify from '@components/Spotify';
import LinkButton from '@components/ui/LinkButton';
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
            <main className="relative grid place-items-center h-screen">
                <div className="w-full m-5 dt:m-0 text-center animate__animated animate__fadeIn">
                    <Title />

                    <Socials />

                    <Spotify />

                    <div className="mt-3 text-lg">
                        <LinkButton href="/portfolio">portfolio</LinkButton>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
