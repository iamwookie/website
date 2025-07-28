import * as motion from 'motion/react-client'; // motion import for server components

import PKFlag from '@public/assets/pk_flag.svg';
import PSFlag from '@public/assets/ps_flag.svg';
import type { SpotifyData } from 'types';

import Spotify from './Spotify';

export default async function Footer() {
    // initial fetch for rendering the flags
    const data: SpotifyData | null = await fetch('https://bil.al/api/spotify/playing', { cache: 'no-store' })
        .then((res) => res.json())
        .catch(() => null);

    return (
        <footer className="fixed bottom-0 flex w-full flex-col px-4 md:px-0">
            <Spotify initial={data} />

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: data ? 2.8 : 2, duration: 0.4 }}
                className="flex w-full items-center justify-center gap-2 py-4"
            >
                <PKFlag width={32} height={24} className="rounded-xs" />
                <PSFlag width={32} height={24} className="rounded-xs" />
            </motion.div>
        </footer>
    );
}
