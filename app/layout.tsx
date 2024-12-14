import './globals.css';
import 'tippy.js/dist/tippy.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata, Viewport } from 'next';
import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Toast from '@components/ui/Toast';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://bil.al'),
    authors: [{ name: 'Bilal' }],
    openGraph: {
        type: 'website',
        url: 'https://bil.al',
    },
};

export const viewport: Viewport = {
    themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${robotoMono.className} bg-black text-white`}>
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
