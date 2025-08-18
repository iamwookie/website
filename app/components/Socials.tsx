'use client';

import { Toast } from '@base-ui-components/react/toast';
import { motion } from 'motion/react';

import data from '@data/social.json';
import DiscordIcon from '@public/assets/icons/discord.svg';
import GitHubIcon from '@public/assets/icons/github.svg';
import LinkedInIcon from '@public/assets/icons/linkedin.svg';
import SpotifyIcon from '@public/assets/icons/spotify.svg';
import SteamIcon from '@public/assets/icons/steam.svg';
import TwitchIcon from '@public/assets/icons/twitch.svg';
import VSCOIcon from '@public/assets/icons/vsco.svg';

import * as Tooltip from './ui/Tooltip';

// animation time: ~1.6s
// todo: find new tooltip solution

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
        hover: { opacity: 0.5, scale: 1.05 },
        tap: { opacity: 0.5, scale: 0.95 },
    };

    return (
        <Tooltip.Provider>
            <motion.ul variants={listVariants} initial="initial" animate="animate" className="flex w-fit items-center justify-center gap-3">
                <motion.li variants={itemVariants} whileHover="hover" whileTap="tap">
                    <Tooltip.Wrapper content="LinkedIn">
                        <a
                            href={data.linkedin}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="LinkedIn Link"
                            className="h-9 w-9 md:h-7 md:w-7"
                        >
                            <LinkedInIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                        </a>
                    </Tooltip.Wrapper>
                </motion.li>
                <motion.li variants={itemVariants} whileHover="hover" whileTap="tap">
                    <Tooltip.Wrapper content="GitHub">
                        <a
                            href={data.github}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="GitHub Link"
                            className="h-9 w-9 md:h-7 md:w-7"
                        >
                            <GitHubIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                        </a>
                    </Tooltip.Wrapper>
                </motion.li>
                <motion.li variants={itemVariants} whileHover="hover" whileTap="tap">
                    <Tooltip.Wrapper content="VSCO">
                        <a
                            href={data.vsco}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="VSCO Link"
                            className="h-9 w-9 md:h-7 md:w-7"
                        >
                            <VSCOIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                        </a>
                    </Tooltip.Wrapper>
                </motion.li>
                <motion.li variants={itemVariants} whileHover="hover" whileTap="tap">
                    <Tooltip.Wrapper content="Steam">
                        <a
                            href={data.steam}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Steam Link"
                            className="h-9 w-9 md:h-7 md:w-7"
                        >
                            <SteamIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                        </a>
                    </Tooltip.Wrapper>
                </motion.li>
                <motion.li variants={itemVariants} whileHover="hover" whileTap="tap">
                    <Tooltip.Wrapper content="Twitch">
                        <a
                            href={data.twitch}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-twitch h-9 w-9 md:h-7 md:w-7"
                            aria-label="Twitch Link"
                        >
                            <TwitchIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                        </a>
                    </Tooltip.Wrapper>
                </motion.li>
                <motion.li variants={itemVariants} whileHover="hover" whileTap="tap">
                    <Tooltip.Wrapper content="Spotify">
                        <a
                            href={data.spotify}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-spotify h-9 w-9 md:h-7 md:w-7"
                            aria-label="Spotify Link"
                        >
                            <SpotifyIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                        </a>
                    </Tooltip.Wrapper>
                </motion.li>
                <motion.li variants={itemVariants} whileHover="hover" whileTap="tap">
                    <Tooltip.Wrapper content="Discord">
                        <button
                            onClick={copyDiscord}
                            className="text-discord flex h-11 w-11 items-center justify-center md:h-9 md:w-9"
                            aria-label="Copy Discord Tag"
                        >
                            <DiscordIcon className="h-11 w-11 md:h-9 md:w-9" fill="currentColor" />
                        </button>
                    </Tooltip.Wrapper>
                </motion.li>
            </motion.ul>
        </Tooltip.Provider>
    );
}
