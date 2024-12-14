import PKFlag from '../../public/assets/pk_flag.svg';
import PSFlag from '../../public/assets/ps_flag.svg';

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full">
            <div className="flex justify-center items-center gap-2 w-full py-4">
                <PKFlag width={32} height={24} className="rounded-sm" />
                <PSFlag width={32} height={24} className="rounded-sm" />
            </div>
        </footer>
    );
}
