import type { Metadata } from 'next';

import Password from '@/app/components/ui/Password';
import ThoughtForm from '@components/thoughts/ThoughtForm';
import { getSession } from '@lib/session';

export const metadata: Metadata = {
    title: 'Thoughts',
    description: 'Share a thought with me.',
    openGraph: {
        title: 'Thoughts',
        description: 'Share a thought with me.',
    },
};

// TODO: session logic can be moved to  a layout if needed

export default async function Thoughts() {
    const session = await getSession();

    return (
        <main className="flex flex-col">
            <section className="container mx-auto flex min-h-dvh flex-col items-center justify-center gap-6 px-4">
                {session.authenticated ? <ThoughtForm /> : <Password />}
            </section>
        </main>
    );
}
