'use client';

import { Toast } from '@base-ui/react/toast';
import { motion, stagger } from 'motion/react';

import data from '@data/social.json';
import DiscordIcon from '@public/assets/icons/discord.svg';
import GitHubIcon from '@public/assets/icons/github.svg';
import LetterboxdIcon from '@public/assets/icons/letterboxd.svg';
import LinkedInIcon from '@public/assets/icons/linkedin.svg';
import SpotifyIcon from '@public/assets/icons/spotify.svg';
import SteamIcon from '@public/assets/icons/steam.svg';

// animation time: ~1.4s (initial load)

export default function Socials() {
    const toastManager = Toast.useToastManager();

    const copyDiscord = () => {
        navigator.clipboard.writeText(data.discord);

        toastManager.add({
            title: 'Copied!',
            description: 'Username has been copied to your clipboard.',
            type: 'success',
        });
    };

    const listVariants = {
        initial: {}, // empty object as we don't want to animate the list itself on initial load
        animate: { transition: { delayChildren: stagger(0.4, { from: 'center' }) } },
    };

    const rightVariants = {
        initial: { opacity: 0, x: -200 },
        animate: { opacity: 1, x: 0, transition: { type: 'spring' as const, bounce: 0.2, duration: 0.4 } },
    };

    const leftVariants = {
        initial: { opacity: 0, x: 200 },
        animate: { opacity: 1, x: 0, transition: { type: 'spring' as const, bounce: 0.2, duration: 0.4 } },
    };

    return (
        <motion.ul
            variants={listVariants}
            initial="initial"
            animate="animate"
            className="flex w-full flex-wrap items-center justify-center gap-4 overflow-hidden"
        >
            <motion.li variants={rightVariants} whileHover={{ opacity: 0.5, scale: 1.05 }} whileTap={{ opacity: 0.5, scale: 0.95 }}>
                <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn Link"
                    className="h-9 w-9 md:h-7 md:w-7"
                >
                    <LinkedInIcon fill="currentColor" className="h-9 w-9 md:h-7 md:w-7" />
                </a>
            </motion.li>

            <motion.li variants={rightVariants} whileHover={{ opacity: 0.5, scale: 1.05 }} whileTap={{ opacity: 0.5, scale: 0.95 }}>
                <a href={data.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub Link" className="h-9 w-9 md:h-7 md:w-7">
                    <GitHubIcon fill="currentColor" className="h-9 w-9 md:h-7 md:w-7" />
                </a>
            </motion.li>

            <motion.li variants={rightVariants} whileHover={{ opacity: 0.5, scale: 1.05 }} whileTap={{ opacity: 0.5, scale: 0.95 }}>
                <a href={data.steam} target="_blank" rel="noreferrer noopener" aria-label="Steam Link" className="h-9 w-9 md:h-7 md:w-7">
                    <SteamIcon fill="currentColor" className="h-9 w-9 md:h-7 md:w-7" />
                </a>
            </motion.li>

            <motion.li variants={leftVariants} whileHover={{ opacity: 0.5, scale: 1.05 }} whileTap={{ opacity: 0.5, scale: 0.95 }}>
                <a
                    href={data.letterboxd}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Letterboxd Link"
                    className="h-9 w-9 md:h-7 md:w-7"
                >
                    <LetterboxdIcon className="h-9 w-9 md:h-7 md:w-7" />
                </a>
            </motion.li>

            <motion.li variants={leftVariants} whileHover={{ opacity: 0.5, scale: 1.05 }} whileTap={{ opacity: 0.5, scale: 0.95 }}>
                <a
                    href={data.spotify}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Spotify Link"
                    className="text-spotify h-9 w-9 md:h-7 md:w-7"
                >
                    <SpotifyIcon fill="currentColor" className="h-9 w-9 md:h-7 md:w-7" />
                </a>
            </motion.li>

            <motion.li variants={leftVariants} whileHover={{ opacity: 0.5, scale: 1.05 }} whileTap={{ opacity: 0.5, scale: 0.95 }}>
                <button
                    onClick={copyDiscord}
                    aria-label="Copy Discord Tag"
                    className="text-discord flex h-11 w-11 items-center justify-center md:h-9 md:w-9"
                >
                    <DiscordIcon fill="currentColor" className="h-11 w-11 md:h-9 md:w-9" />
                </button>
            </motion.li>
        </motion.ul>
    );
}
