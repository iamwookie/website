import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
    title: "💗",
    description: 'Will you be my special someone?',
    openGraph: {
        title: "💗",
        description: 'Will you be that special someone?',
    },
};

export const viewport: Viewport = {
    themeColor: '#ff69b4',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className="flex items-center justify-center min-h-screen overflow-hidden bg-black">{children}</div>;
}
