import './globals.css';
import 'animate.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'tippy.js/dist/tippy.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { Nunito } from 'next/font/google';
import { Metadata } from 'next';
import Image from 'next/image';
import Footer from '@components/Footer';
import Toast from '@components/ui/Toast';
import Analytics from '@components/Analytics';

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

                {children}

                <Footer />

                <Toast />
            </body>

            <Analytics />
        </html>
    );
}
