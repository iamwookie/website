'use client';

import { motion } from 'motion/react';
import { toast } from 'react-toastify';

import data from '@data/social.json';
import DiscordIcon from '@public/assets/icons/discord.svg';
import GitHubIcon from '@public/assets/icons/github.svg';
import LinkedInIcon from '@public/assets/icons/linkedin.svg';
import SpotifyIcon from '@public/assets/icons/spotify.svg';
import SteamIcon from '@public/assets/icons/steam.svg';
import TwitchIcon from '@public/assets/icons/twitch.svg';
import VSCOIcon from '@public/assets/icons/vsco.svg';

import Tooltip from './ui/Tooltip';


// animation time: ~1.6s
// todo: find new tooltip solution

export default function Socials() {
    const copyDiscord = () => {
        navigator.clipboard.writeText(data.discord);
        toast.success('Copied Discord!');
    };

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const item = {
        hidden: { opacity: 0, y: 10, transition: { duration: 0.4 } },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <motion.ul variants={container} initial="hidden" animate="show" className="flex w-fit items-center justify-center gap-3">
            <Tooltip content="LinkedIn">
                <motion.li variants={item} whileHover={{ opacity: 0.5, scale: 0.98 }} whileTap={{ opacity: 0.5, scale: 0.98 }}>
                    <a href={data.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn Link">
                        <LinkedInIcon width={28} height={28} fill="currentColor" />
                    </a>
                </motion.li>
            </Tooltip>

            <Tooltip content="GitHub">
                <motion.li variants={item} whileHover={{ opacity: 0.5, scale: 0.98 }} whileTap={{ opacity: 0.5, scale: 0.98 }}>
                    <a href={data.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub Link">
                        <GitHubIcon width={28} height={28} fill="currentColor" />
                    </a>
                </motion.li>
            </Tooltip>

            <Tooltip content="VSCO">
                <motion.li variants={item} whileHover={{ opacity: 0.5, scale: 0.98 }} whileTap={{ opacity: 0.5, scale: 0.98 }}>
                    <a href={data.vsco} target="_blank" rel="noreferrer noopener" aria-label="VSCO Link">
                        <VSCOIcon width={28} height={28} fill="currentColor" />
                    </a>
                </motion.li>
            </Tooltip>

            <Tooltip content="Steam">
                <motion.li variants={item} whileHover={{ opacity: 0.5, scale: 0.98 }} whileTap={{ opacity: 0.5, scale: 0.98 }}>
                    <a href={data.steam} target="_blank" rel="noreferrer noopener" aria-label="Steam Link">
                        <SteamIcon width={28} height={28} fill="currentColor" />
                    </a>
                </motion.li>
            </Tooltip>

            <Tooltip content="Twitch">
                <motion.li variants={item} whileHover={{ opacity: 0.5, scale: 0.98 }} whileTap={{ opacity: 0.5, scale: 0.98 }}>
                    <a href={data.twitch} target="_blank" rel="noreferrer noopener" className="text-twitch" aria-label="Twitch Link">
                        <TwitchIcon width={28} height={28} fill="currentColor" />
                    </a>
                </motion.li>
            </Tooltip>

            <Tooltip content="Spotify">
                <motion.li variants={item} whileHover={{ opacity: 0.5, scale: 0.98 }} whileTap={{ opacity: 0.5, scale: 0.98 }}>
                    <a href={data.spotify} target="_blank" rel="noreferrer noopener" className="text-spotify" aria-label="Spotify Link">
                        <SpotifyIcon width={28} height={28} fill="currentColor" />
                    </a>
                </motion.li>
            </Tooltip>

            <Tooltip content="Discord">
                <motion.li variants={item} whileHover={{ opacity: 0.5, scale: 0.98 }} whileTap={{ opacity: 0.5, scale: 0.98 }}>
                    <button onClick={copyDiscord} className="text-discord flex items-center justify-center" aria-label="Copy Discord Tag">
                        <DiscordIcon width={36} height={36} fill="currentColor" />
                    </button>
                </motion.li>
            </Tooltip>
        </motion.ul>
    );
}
