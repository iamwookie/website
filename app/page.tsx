import Link from 'next/link';
import Socials from '@components/Socials';
import Spotify from '@components/Spotify';
import Button from '@components/ui/Button';

export default async function Home() {
    return (
        <>
            <h1 className="text-7xl lg:text-9xl">bilal mustafa</h1>

            <Socials />

            <div className="mt-3">
                <Spotify />
            </div>

            <div className="mt-3">
                <Link href="/portfolio">
                    <Button>portfolio</Button>
                </Link>
            </div>
        </>
    );
}
