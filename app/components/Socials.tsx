'use client';

import { toast } from 'react-toastify';
import Tooltip from './ui/Tooltip';

import LinkedInIcon from '../../public/assets/icons/linkedin.svg';
import GitHubIcon from '../../public/assets/icons/github.svg';
import VSCOIcon from '../../public/assets/icons/vsco.svg';
import SteamIcon from '../../public/assets/icons/steam.svg';
import TwitchIcon from '../../public/assets/icons/twitch.svg';
import SpotifyIcon from '../../public/assets/icons/spotify.svg';
import DiscordIcon from '../../public/assets/icons/discord.svg';

import data from '@data/social.json';

export default function Socials() {
    function copyDiscord(): void {
        navigator.clipboard.writeText(data.discord);
        toast.success('Copied Discord!');
    }

    return (
        <div className="flex justify-center items-center gap-3 py-2 px-4 rounded-full bg-black/75">
            <Tooltip content="LinkedIn">
                <a href={data.linkedin} target="_blank" rel="noreferrer noopener" aria-label="Steam Link">
                    <LinkedInIcon width={32} height={32} fill="currentColor" />
                </a>
            </Tooltip>

            <Tooltip content="GitHub">
                <a href={data.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub Link">
                    <GitHubIcon width={32} height={32} fill="currentColor" />
                </a>
            </Tooltip>

            <Tooltip content="VSCO" theme="blur" arrow={false}>
                <a href={data.vsco} target="_blank" rel="noreferrer noopener" aria-label="VSCO Link">
                    <VSCOIcon width={32} height={32} fill="currentColor" />
                </a>
            </Tooltip>

            <Tooltip content="Steam">
                <a href={data.steam} target="_blank" rel="noreferrer noopener" aria-label="Steam Link">
                    <SteamIcon width={32} height={32} fill="currentColor" />
                </a>
            </Tooltip>

            <Tooltip content="Twitch">
                <a href={data.twitch} target="_blank" rel="noreferrer noopener" className="text-twitch" aria-label="Twitch Link">
                    <TwitchIcon width={32} height={32} fill="currentColor" />
                </a>
            </Tooltip>

            <Tooltip content="Spotify">
                <a href={data.spotify} target="_blank" rel="noreferrer noopener" className="text-spotify" aria-label="Spotify Link">
                    <SpotifyIcon width={32} height={32} fill="currentColor" />
                </a>
            </Tooltip>

            <Tooltip content="Discord">
                <button onClick={copyDiscord} className="text-discord" aria-label="Copy Discord Tag">
                    <DiscordIcon width={40} height={40} fill="currentColor" />
                </button>
            </Tooltip>
        </div>
    );
}
