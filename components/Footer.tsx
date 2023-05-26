import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative lg:fixed w-screen bottom-4 mt-8 text-center animate__animated animate__fadeIn">
            <Image src="/assets/pk_flag.svg" width={30} height={30} alt="Pakistan Flag" className="mx-auto rounded-sm" />
        </footer>
    );
}
