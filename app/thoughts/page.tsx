import ThoughtForm from '@components/ui/ThoughtForm';

export default function Thoughts() {
    return (
        <main className="flex flex-col">
            <section className="container mx-auto flex min-h-dvh flex-col items-center justify-center gap-6">
                <h1 className="text-xl text-white sm:text-2xl md:text-3xl">Share a thought</h1>
                <ThoughtForm />
            </section>
        </main>
    );
}
