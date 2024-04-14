import Image from 'next/image';
import { cn } from '@lib/utils';

export default function Footer({ className }: { className?: string }) {
    return (
        <footer className={cn('flex justify-center items-center gap-2 w-full mb-4 text-center animate__animated animate__fadeIn', className)}>
            <Image src="/assets/pk_flag.svg" alt="Pakistan Flag" className="object-cover h-6 w-8 rounded-sm" width={0} height={0} />
            <Image src="/assets/ps_flag.svg" alt="Palestine Flag" className="object-cover h-6 w-8 rounded-sm" width={0} height={0} />
        </footer>
    );
}
