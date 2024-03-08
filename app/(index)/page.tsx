import Title from '@components/Title';
import Socials from '@components/Socials';
import Spotify from '@components/Spotify';
import LinkButton from '@components/ui/LinkButton';

export default function Home() {
    return (
        <div className="w-full m-5 dt:m-0 text-center animate__animated animate__fadeIn">
            <Title />

            <Socials />

            <Spotify />

            <div className="mt-3 text-lg">
                <LinkButton href="/portfolio">portfolio</LinkButton>
            </div>
        </div>
    );
}
