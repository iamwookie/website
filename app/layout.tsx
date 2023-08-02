import './globals.css';
import 'animate.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'tippy.js/dist/tippy.css';
import 'react-toastify/dist/ReactToastify.min.css';

import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Image from 'next/image';
import Analytics from '@components/Analytics';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    authors: [{ name: 'Bilal' }],
    themeColor: '#FFFFFF',
    openGraph: {
        type: 'website',
        url: 'https://bil.al',
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
            </body>

            <Analytics />
        </html>
    );
}
