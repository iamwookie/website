import Image from 'next/future/image';
import Link from 'next/link';
import Socials from "./Socials";
import Spotify from "./Spotify";

export default function Card({ discordTag, profileURL, musicData }) {
    return (
        <div className='backdrop-blur-xl p-5 rounded-lg text-center text-white font-nunito animate__animated animate__fadeIn'>
            <Image src={profileURL} width={100} height={100} alt='Avatar' className='mx-auto w-36 rounded-full border-2' />

            <h1 className='mt-1 text-2xl sm:text'>{"Hi, I'm Bilal"}</h1>
            <h2 className='mt-1 text-sm'>Code | Media | Design</h2>

            <p className='mt-4 py-4 border-y-2 text-base'>
                Sometimes I make random stuff like this site.<br />
                🔭 Mostly Working On: <a href='https://nebularoleplay.com' target='_blank' rel='noreferrer' className='underline'>Nebula Roleplay</a> (a business I run)
            </p>

            <Link href='/portfolio'>
                <div className='mt-4'>
                    <button className='px-2 rounded-lg border-2 hover:bg-white hover:text-black'>Portfolio</button>
                </div>
            </Link>

            <Socials discordTag={discordTag} />

            {musicData && <Spotify data={musicData.item} />}
        </div>
    );
}
