import { cn } from '@lib/utils';

import PKFlag from '../../public/assets/pk_flag.svg';
import PSFlag from '../../public/assets/ps_flag.svg';

export default function Footer({ className }: { className?: string }) {
    return (
        <footer className={cn('flex justify-center items-center gap-2 w-full mb-4 text-center animate-fadeIn', className)}>
            <PKFlag width={32} height={24} className="rounded-sm" />
            <PSFlag width={32} height={24} className="rounded-sm" />
        </footer>
    );
}
