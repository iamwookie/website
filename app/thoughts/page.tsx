import type { Metadata } from 'next';

import ThoughtForm from '@/app/components/thoughts/ThoughtForm';
import Password from '@/app/components/ui/Password';
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
                <div className="flex w-full flex-col items-center gap-6">
                    <h1 className="text-xl text-white sm:text-2xl md:text-3xl">
                        {session.authenticated ? 'You are powerful' : 'You shall not pass'}
                    </h1>
                    <h3 className="md:text-md max-w-md text-center text-xs text-white/70 sm:text-sm">
                        {session.authenticated
                            ? 'Submit a thought (can be anything) here in order to add it to the pool of thoughts 😱'
                            : 'Enter the magic words for access to immense power.'}
                    </h3>
                    {session.authenticated ? <ThoughtForm /> : <Password />}
                </div>
            </section>
        </main>
    );
}
