import './globals.css';
import 'animate.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'tippy.js/dist/tippy.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { Nunito } from 'next/font/google';
import { Metadata } from 'next';
import Image from 'next/image';
import Footer from '@components/Footer';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '( ͡° ͜ʖ ͡°)',
    description: 'A person on this planet.',
    authors: [{ name: 'Bilal' }],
    themeColor: '#FFFFFF',
    openGraph: {
        type: 'website',
        url: 'https://bil.al',
        title: '( ͡° ͜ʖ ͡°)',
        description: 'A person on this planet.',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${nunito.className} text-white`}>
                <div className="fixed h-full w-full overflow-hidden">
                    <Image alt="Background Image" src={'/assets/bg.jpg'} sizes="100vw" className="object-cover" fill priority />
                </div>

                <main className="grid min-h-screen place-items-center">
                    <div className="relative m-5 lg:m-0 text-center animate__animated animate__fadeIn">{children}</div>
                </main>

                <Footer />
            </body>
        </html>
    );
}
