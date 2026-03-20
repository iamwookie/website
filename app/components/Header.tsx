'use client';

import { usePathname } from 'next/navigation';

import EidTitle from './EidTitle';
import Title from './Title';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed z-10 flex w-full items-center justify-center py-4">
            {pathname.startsWith('/eid') ? <EidTitle /> : <Title />}
        </header>
    );
}
