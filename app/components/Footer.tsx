import type { SpotifyData } from 'types';

import * as motion from 'motion/react-client'; // motion import for server components

import PKFlag from '@public/assets/pk_flag.svg';
import PSFlag from '@public/assets/ps_flag.svg';

import Spotify from './Spotify';

// animation time: ~3.2s (initial load + spotify)

export default async function Footer() {
    const res = await fetch(`${process.env.APP_URL}/api/spotify/playing`);
    const data: SpotifyData | null = await res.json();

    return (
        <motion.footer
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.4 }}
            className="fixed bottom-0 flex w-full flex-col px-4 md:px-0"
        >
            <Spotify initial={data} />

            <div className="flex w-full items-center justify-center gap-2 py-4">
                <PKFlag width={32} height={24} className="rounded-xs" />
                <PSFlag width={32} height={24} className="rounded-xs" />
            </div>
        </motion.footer>
    );
}
