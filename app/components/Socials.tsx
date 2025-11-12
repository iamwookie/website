'use client';

import { Toast } from '@base-ui-components/react/toast';
import { motion } from 'motion/react';

import data from '@data/social.json';

import LinkedInIcon from '@public/assets/icons/linkedin.svg';
import GitHubIcon from '@public/assets/icons/github.svg';
import SteamIcon from '@public/assets/icons/steam.svg';
import LetterboxdIcon from '@public/assets/icons/letterboxd.svg';
import SpotifyIcon from '@public/assets/icons/spotify.svg';
import DiscordIcon from '@public/assets/icons/discord.svg';

// animation time: ~1.6s

export default function Socials() {
    const toastManager = Toast.useToastManager();

    const copyDiscord = () => {
        navigator.clipboard.writeText(data.discord);

        toastManager.add({
            title: 'Copied!',
            description: 'Discord username has been copied to your clipboard.',
            type: 'success',
        });
    };

    const listVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        initial: { opacity: 0, y: 10, transition: { duration: 0.4 } },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <motion.ul
            variants={listVariants}
            initial="initial"
            animate="animate"
            className="flex w-fit flex-wrap items-center justify-center gap-4"
        >
            <motion.li variants={itemVariants} whileHover={{ opacity: 0.5, scale: 1.05 }} whileTap={{ opacity: 0.5, scale: 0.95 }}>
                <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn Link"
                    className="h-9 w-9 md:h-7 md:w-7"
                >
                    <LinkedInIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                </a>
            </motion.li>

            <motion.li variants={itemVariants} whileHover={{ opacity: 0.5, scale: 1.05 }} whileTap={{ opacity: 0.5, scale: 0.95 }}>
                <a href={data.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub Link" className="h-9 w-9 md:h-7 md:w-7">
                    <GitHubIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                </a>
            </motion.li>

            <motion.li variants={itemVariants} whileHover={{ opacity: 0.5, scale: 1.05 }} whileTap={{ opacity: 0.5, scale: 0.95 }}>
                <a href={data.steam} target="_blank" rel="noreferrer noopener" aria-label="Steam Link" className="h-9 w-9 md:h-7 md:w-7">
                    <SteamIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                </a>
            </motion.li>

            <motion.li variants={itemVariants} whileHover={{ opacity: 0.5, scale: 1.05 }} whileTap={{ opacity: 0.5, scale: 0.95 }}>
                <a
                    href={data.letterboxd}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="h-9 w-9 md:h-7 md:w-7"
                    aria-label="Letterboxd Link"
                >
                    <LetterboxdIcon className="h-9 w-9 md:h-7 md:w-7" />
                </a>
            </motion.li>

            <motion.li variants={itemVariants} whileHover={{ opacity: 0.5, scale: 1.05 }} whileTap={{ opacity: 0.5, scale: 0.95 }}>
                <a
                    href={data.spotify}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-spotify h-9 w-9 md:h-7 md:w-7"
                    aria-label="Spotify Link"
                >
                    <SpotifyIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                </a>
            </motion.li>

            <motion.li variants={itemVariants} whileHover={{ opacity: 0.5, scale: 1.05 }} whileTap={{ opacity: 0.5, scale: 0.95 }}>
                <button
                    onClick={copyDiscord}
                    className="text-discord flex h-11 w-11 items-center justify-center md:h-9 md:w-9"
                    aria-label="Copy Discord Tag"
                >
                    <DiscordIcon className="h-11 w-11 md:h-9 md:w-9" fill="currentColor" />
                </button>
            </motion.li>
        </motion.ul>
    );
}
