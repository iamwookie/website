import './globals.css';
import 'animate.css';
import 'tippy.js/dist/tippy.css';
import 'react-toastify/dist/ReactToastify.min.css';

import type { Metadata, Viewport } from 'next';

import { Nunito } from 'next/font/google';
import Image from 'next/image';
import Toast from '@components/ui/Toast';
import { Analytics } from '@vercel/analytics/react';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://bil.al'),
    authors: [{ name: 'Bilal' }],
    openGraph: {
        type: 'website',
        url: 'https://bil.al',
    },
};

export const viewport: Viewport = {
    themeColor: '#FFFFFF',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${nunito.className} bg-black text-white`}>
                <div className="fixed h-full w-full overflow-hidden opacity-75 -z-10">
                    <Image alt="Background Image" src={'/assets/bg.jpg'} sizes="100vw" className="object-cover" fill priority />
                </div>

                {children}

                <Toast />
                <Analytics />
            </body>
        </html>
    );
}
