import * as motion from 'motion/react-client'; // motion import for server components

import PKFlag from '@public/assets/pk_flag.svg';
import PSFlag from '@public/assets/ps_flag.svg';

// animation time: ~2.4s (initial load)

export default async function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.4 }}
            className="fixed bottom-0 z-10 flex w-full flex-col gap-4 px-4 py-4"
        >
            <p className="text-muted-foreground text-center text-xs">engineered by a human</p>

            <div className="flex w-full items-center justify-center gap-2">
                <PKFlag width={32} height={24} className="rounded-xs" />
                <PSFlag width={32} height={24} className="rounded-xs" />
            </div>
        </motion.footer>
    );
}
