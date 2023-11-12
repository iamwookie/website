import type { Metadata } from 'next';
import Footer from '@components/Footer';

export const metadata: Metadata = {
    title: 'portfolio',
    description: 'Random stuff I do.',
    openGraph: {
        title: 'portfolio',
        description: 'Random stuff I do.',
    },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="grid place-items-center min-h-screen">{children}</main>

            <Footer className="relative" />
        </>
    );
}
