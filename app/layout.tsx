import './globals.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata, Viewport } from 'next';
import { Roboto_Mono } from 'next/font/google';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Toast from '@components/ui/Toast';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://bil.al'),
    authors: [{ name: 'Bilal' }],
    openGraph: {
        title: '( ͡° ͜ʖ ͡°)',
        description: 'A person on this planet.',
        url: 'https://bil.al',
        locale: 'en_GB',
        type: 'website',
    },
};

export const viewport: Viewport = {
    themeColor: 'black',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={robotoMono.className}>
                <Header />

                {children}

                <Footer />

                <Toast />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
