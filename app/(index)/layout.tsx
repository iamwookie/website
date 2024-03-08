import type { Metadata } from 'next';
import Footer from '@components/Footer';
import Toast from '@components/ui/Toast';

export const metadata: Metadata = {
    title: '( ͡° ͜ʖ ͡°)',
    description: 'A person on this planet.',
    openGraph: {
        title: '( ͡° ͜ʖ ͡°)',
        description: 'A person on this planet.',
    },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="grid place-items-center h-screen">{children}</main>

            <Footer className="fixed" />

            <Toast />
        </>
    );
}
