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
    };

    const iconVariants = {
        hover: { opacity: 0.5, scale: 0.98 },
        tap: { opacity: 0.5, scale: 0.98 },
    };

    return (
        <Tooltip.Provider>
            <motion.ul variants={listVariants} initial="initial" animate="animate" className="flex w-fit items-center justify-center gap-3">
                <motion.li variants={itemVariants}>
                    <Tooltip.Wrapper content="LinkedIn">
                        <motion.a
                            href={data.linkedin}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="LinkedIn Link"
                            className="h-9 w-9 md:h-7 md:w-7"
                            variants={iconVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <LinkedInIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                        </motion.a>
                    </Tooltip.Wrapper>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Tooltip.Wrapper content="GitHub">
                        <motion.a
                            href={data.github}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="GitHub Link"
                            className="h-9 w-9 md:h-7 md:w-7"
                            variants={iconVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <GitHubIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                        </motion.a>
                    </Tooltip.Wrapper>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Tooltip.Wrapper content="VSCO">
                        <motion.a
                            href={data.vsco}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="VSCO Link"
                            className="h-9 w-9 md:h-7 md:w-7"
                            variants={iconVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <VSCOIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                        </motion.a>
                    </Tooltip.Wrapper>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Tooltip.Wrapper content="Steam">
                        <motion.a
                            href={data.steam}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Steam Link"
                            className="h-9 w-9 md:h-7 md:w-7"
                            variants={iconVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <SteamIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                        </motion.a>
                    </Tooltip.Wrapper>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Tooltip.Wrapper content="Twitch">
                        <motion.a
                            href={data.twitch}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-twitch h-9 w-9 md:h-7 md:w-7"
                            aria-label="Twitch Link"
                            variants={iconVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <TwitchIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                        </motion.a>
                    </Tooltip.Wrapper>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Tooltip.Wrapper content="Spotify">
                        <motion.a
                            href={data.spotify}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-spotify h-9 w-9 md:h-7 md:w-7"
                            aria-label="Spotify Link"
                            variants={iconVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <SpotifyIcon className="h-9 w-9 md:h-7 md:w-7" fill="currentColor" />
                        </motion.a>
                    </Tooltip.Wrapper>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Tooltip.Wrapper content="Discord">
                        <motion.button
                            onClick={copyDiscord}
                            className="text-discord flex h-11 w-11 items-center justify-center md:h-9 md:w-9"
                            aria-label="Copy Discord Tag"
                            variants={iconVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <DiscordIcon className="h-11 w-11 md:h-9 md:w-9" fill="currentColor" />
                        </motion.button>
                    </Tooltip.Wrapper>
                </motion.li>
            </motion.ul>
        </Tooltip.Provider>
    );
}
