'use client';

import { toast } from 'react-toastify';
import Tooltip from './ui/Tooltip';

import VscoIcon from '../../public/assets/icons/vsco.svg';
import GithubIcon from '../../public/assets/icons/github.svg';
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
        <div className="inline-block p-2 rounded-lg bg-black bg-opacity-50">
            <div className="flex justify-center items-center gap-3">
                <Tooltip content="VSCO" theme="blur" arrow={false}>
                    <a href={data.vsco} target="_blank" rel="noreferrer noopener" aria-label="VSCO Link">
                        <VscoIcon width={32} height={32} fill="currentColor" />
                    </a>
                </Tooltip>

                <Tooltip content="GitHub">
                    <a href={data.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub Link">
                        <GithubIcon width={32} height={32} fill="currentColor" />
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
        </div>
    );
}
