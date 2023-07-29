import Socials from '@components/Socials';
import Spotify from '@components/Spotify';
import LinkButton from '@components/ui/LinkButton';

export default async function Home() {
    return (
        <main className="grid place-items-center min-h-screen">
            <div className="relative m-5 lg:m-0 text-center animate__animated animate__fadeIn">
                <h1 className="text-7xl lg:text-9xl">bilal mustafa</h1>

                <Socials />

                <div className="mt-3">
                    <Spotify />
                </div>

                <div className="mt-3 text-lg">
                    <LinkButton href="/portfolio">portfolio</LinkButton>
                </div>
            </div>
        </main>
    );
}
