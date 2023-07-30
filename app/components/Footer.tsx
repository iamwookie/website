import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative dt:fixed min-w-full bottom-4 mt-4 text-center animate__animated animate__fadeIn">
            <div className="relative mx-auto h-6 w-8">
                <Image src="/assets/pk_flag.svg" alt="Pakistan Flag" className="object-cover rounded-sm" fill />
            </div>
        </footer>
    );
}
