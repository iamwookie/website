import Head from 'next/head';
import Image from 'next/future/image';
import Link from 'next/link';

import Button from '../components/Button';
import Socials from '../components/Socials';
import Spotify from '../components/Spotify';

import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Discord from '../libs/discord';

export default function Home({ discordTag, avatarURL }) {
    return (
        <>
            <Head>
                <title>( ͡° ͜ʖ ͡°)</title>
            </Head>

            <main className='grid min-h-screen place-items-center'>
                <div className='backdrop-blur-xl p-5 rounded-lg text-center text-white font-nunito animate__animated animate__fadeIn'>
                    {avatarURL && <Image src={avatarURL} width={100} height={100} alt='Avatar' className='mx-auto w-36 rounded-full border-2' />}

                    <h1 className='mt-2 text-2xl sm:text'>Bilal Mustafa</h1>
                    <h2 className='mt-1 text-sm'>Code | Media | Design</h2>
                    <Image src='/assets/pk_flag.svg' width={24} height={24} alt='Pakistan Flag' className='mt-2 mx-auto rounded-sm' />

                    <p className='mt-4 py-4 border-y-2 text-base'>
                        18<br />
                        it is what it is<br />
                        ✦
                    </p>

                    <div className='mt-4'>
                        <Link href='/portfolio'>
                            <Button>Portfolio</Button>
                        </Link>
                    </div>


                    <Socials discordTag={discordTag} />

                    <Spotify />
                </div>
            </main>

            <ToastContainer
                limit={3}
                theme='colored'
                transition={Flip}
                position="bottom-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
            />
        </>
    );
}

export async function getStaticProps() {
    const user = await Discord.fetchUser('244662779745665026');

    if (!user) return { props: {} };

    return {
        props: {
            discordTag: user.tag,
            avatarURL: user.avatarURL,
        },
        revalidate: 60,
    };
}