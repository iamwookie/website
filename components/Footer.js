import Image from 'next/future/image';

export default function Footer() {
    return (
        <footer className='lg:fixed md:relative w-screen bottom-4 mt-8 text-center text-white'>
            <div className='inline-block backdrop-blur-xl rounded-lg p-2'>
                <div className='flex items-center'>
                    <Image src='/assets/pk_flag.svg' width={32} height={32} alt='Pakistan Flag' className='inline rounded-md' />
                    <p className='inline ml-2 text-lg'>More than 33 million people have been affected by floods in Pakistan. <a href='https://www.islamic-relief.org.uk/pakistan-floods-appeal/' target='_blank' rel='noreferrer' className='underline hover:opacity-50'>Click here</a> to donate.</p>
                </div>
            </div>
        </footer>
    );
}
