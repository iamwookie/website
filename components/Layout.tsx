import { ReactNode } from 'react';
import Image from 'next/image';
import Main from './Main';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="fixed h-full w-full overflow-hidden">
                <Image alt="Background Image" src={'/assets/bg.jpg'} sizes="100vw" className="object-cover" fill priority />
            </div>

            <Main>
                <div className="relative m-5 lg:m-0 text-center animate__animated animate__fadeIn">{children}</div>
            </Main>

            <Footer />
        </>
    );
}
