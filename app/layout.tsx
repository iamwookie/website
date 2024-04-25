import './globals.css';
import 'animate.css';
import 'tippy.js/dist/tippy.css';
import 'react-toastify/dist/ReactToastify.min.css';

import type { Metadata, Viewport } from 'next';

import { Nunito } from 'next/font/google';
import Image from 'next/image';
import Toast from '@components/ui/Toast';
import { Analytics } from '@vercel/analytics/react';

import backgroundImage from '../public/assets/bg.jpg';

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
    themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${nunito.className} bg-black text-white`}>
                <div className="fixed h-full w-full opacity-75 blur-sm overflow-hidden -z-10">
                    <Image
                        src={backgroundImage}
                        alt="Background Image"
                        placeholder="blur"
                        quality={100}
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>

                {children}

                <Toast />
                <Analytics />
            </body>
        </html>
    );
}
