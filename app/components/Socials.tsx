'use client';

import { toast } from 'react-toastify';
import Tooltip from './ui/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSteam, faTwitch, faSpotify, faDiscord } from '@fortawesome/free-brands-svg-icons';

import data from '@data/social.json';

export default function Socials() {
    function copyDiscord(): void {
        navigator.clipboard.writeText(data.discord);
        toast.success('Copied Discord!');
    }

    return (
        <div className="inline-block p-3 rounded-lg bg-black bg-opacity-50">
            <div className="flex justify-center items-center gap-3">
                <Tooltip content="VSCO" theme="blur" arrow={false}>
                    <a href={data.vsco} target="_blank" rel="noreferrer noopener" aria-label="VSCO Link">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            fill="white"
                            width={32}
                            height={32}
                            aria-hidden
                            focusable={false}
                        >
                            <path d="m 50 0 a 50 50 0 1 0 50 50 a 50.06 50.06 0 0 0 -50 -50 z m 48 50 a 48.39 48.39 0 0 1 -0.25 4.92 l -8.49 -1 c 0.12 -1.27 0.19 -2.57 0.19 -3.87 s -0.06 -2.45 -0.18 -3.66 l 8.49 -1 c 0.24 1.48 0.24 3.03 0.24 4.61 z m -96 0 a 48.38 48.38 0 0 1 0.24 -4.84 l 8.49 1 c -0.12 1.25 -0.19 2.52 -0.19 3.8 s 0.07 2.55 0.19 3.8 l -8.49 1 q -0.24 -2.32 -0.24 -4.76 z m 85.3 -12.93 l 8 -3 a 47.63 47.63 0 0 1 2.26 9.32 l -8.49 1 a 39.14 39.14 0 0 0 -1.77 -7.32 z m 0.23 12.93 a 37.55 37.55 0 0 1 -0.72 7.3 l -8.41 -1.94 a 28.71 28.71 0 0 0 0 -10.94 l 8.42 -1.9 a 37.56 37.56 0 0 1 0.71 7.48 z m -37.53 26.94 a 26.94 26.94 0 1 1 26.94 -26.94 a 27 27 0 0 1 -26.94 26.94 z m 0.91 10.56 l 0 -8.63 a 28.7 28.7 0 0 0 10.74 -2.45 l 3.73 7.78 a 37.27 37.27 0 0 1 -14.47 3.31 z m -16.42 -3.34 l 3.75 -7.77 a 28.7 28.7 0 0 0 10.76 2.49 l 0 8.62 a 37.27 37.27 0 0 1 -14.51 -3.34 z m -22.02 -34.16 a 37.55 37.55 0 0 1 0.77 -7.6 l 8.41 1.93 a 28.74 28.74 0 0 0 -0.07 10.94 l -8.42 1.91 a 37.55 37.55 0 0 1 -0.69 -7.18 z m 36.53 -37.5 v 8.63 a 28.7 28.7 0 0 0 -10.59 2.4 l -3.74 -7.77 a 37.27 37.27 0 0 1 14.33 -3.26 z m 16.43 3.3 l -3.77 7.76 a 28.7 28.7 0 0 0 -10.66 -2.44 v -8.62 a 37.27 37.27 0 0 1 14.43 3.3 z m 21.19 19.44 a 39.4 39.4 0 0 0 -3.48 -6.68 l 7 -4.84 a 47.94 47.94 0 0 1 4.44 8.51 z m -0.27 5.38 l -8.43 1.9 a 28.82 28.82 0 0 0 -4.76 -9.8 l 6.76 -5.35 a 37.41 37.41 0 0 1 6.42 13.25 z m -14.43 -9.43 a 29.08 29.08 0 0 0 -8.5 -6.78 l 3.77 -7.76 a 37.76 37.76 0 0 1 11.49 9.17 z m -2.51 -15.56 l 4 -7.56 a 48.24 48.24 0 0 1 7.87 5.51 l -5.69 6.42 a 39.67 39.67 0 0 0 -6.18 -4.37 z m -1.73 -0.92 a 39.2 39.2 0 0 0 -7 -2.73 l 2.07 -8.3 a 47.69 47.69 0 0 1 9 3.47 z m -8.95 -3.21 a 39.4 39.4 0 0 0 -7.62 -1 v -8.5 a 47.94 47.94 0 0 1 9.69 1.2 z m -9.58 -1 a 39.44 39.44 0 0 0 -7.52 0.88 l -2 -8.3 a 48 48 0 0 1 9.53 -1.08 z m -9.43 1.34 a 39.2 39.2 0 0 0 -7.1 2.67 l -3.96 -7.51 a 47.68 47.68 0 0 1 9 -3.41 z m -8.83 3.58 a 39.65 39.65 0 0 0 -6.25 4.3 l -5.64 -6.36 a 48.23 48.23 0 0 1 7.94 -5.48 z m 2 1.14 l 3.74 7.77 a 29.08 29.08 0 0 0 -8.52 6.75 l -6.74 -5.38 a 37.76 37.76 0 0 1 11.56 -9.1 z m -12.72 10.7 l 6.74 5.38 a 28.82 28.82 0 0 0 -4.8 9.78 l -8.42 -1.93 a 37.41 37.41 0 0 1 6.48 -13.23 z m -6.71 7.74 l -8 -3 a 48 48 0 0 1 4.54 -8.53 l 7 4.86 a 39.42 39.42 0 0 0 -3.54 6.67 z m -0.7 1.83 a 39.15 39.15 0 0 0 -1.83 7.37 l -8.48 -1 a 47.63 47.63 0 0 1 2.32 -9.38 z m -1.83 18.91 a 39.14 39.14 0 0 0 1.83 7.37 l -8 3 a 47.63 47.63 0 0 1 -2.31 -9.37 z m 2.52 9.21 a 39.42 39.42 0 0 0 3.55 6.71 l -7 4.85 a 48 48 0 0 1 -4.54 -8.51 z m 0.13 -5.86 l 8.42 -1.91 a 28.8 28.8 0 0 0 4.71 9.91 l -6.71 5.37 a 37.4 37.4 0 0 1 -6.41 -13.37 z m 14.33 9.54 a 29.09 29.09 0 0 0 8.55 6.91 l -3.74 7.76 a 37.77 37.77 0 0 1 -11.55 -9.3 z m 2.94 15.9 l -4 7.57 a 48.23 48.23 0 0 1 -7.85 -5.48 l 5.67 -6.39 a 39.65 39.65 0 0 0 6.2 4.3 z m 1.74 0.91 a 39.2 39.2 0 0 0 7.08 2.67 l -2.06 8.3 a 47.68 47.68 0 0 1 -9 -3.41 z m 9 3.14 a 39.44 39.44 0 0 0 7.51 0.89 v 8.53 a 48 48 0 0 1 -9.55 -1.14 z m 9.47 0.88 a 39.41 39.41 0 0 0 7.5 -0.92 l 2 8.3 a 48 48 0 0 1 -9.56 1.16 z m 9.4 -1.39 a 39.2 39.2 0 0 0 7.05 -2.69 l 4 7.57 a 47.68 47.68 0 0 1 -9 3.43 z m 8.78 -3.61 a 39.65 39.65 0 0 0 6.2 -4.29 l 5.65 6.41 a 48.24 48.24 0 0 1 -7.88 5.42 z m -2.09 -1.11 l -3.73 -7.78 a 29.08 29.08 0 0 0 8.58 -6.87 l 6.73 5.39 a 37.76 37.76 0 0 1 -11.57 9.27 z m 12.85 -10.79 l -6.73 -5.39 a 28.81 28.81 0 0 0 4.73 -9.89 l 8.41 1.94 a 37.4 37.4 0 0 1 -6.41 13.34 z m 6.54 -7.56 l 8 3 a 48 48 0 0 1 -4.54 8.49 l -7 -4.87 a 39.42 39.42 0 0 0 3.54 -6.62 z m 0.7 -1.83 a 39.14 39.14 0 0 0 1.82 -7.31 l 8.48 1 a 47.63 47.63 0 0 1 -2.31 9.31 z m 1.83 -41 l -7 4.84 a 39.8 39.8 0 0 0 -5 -5.67 l 5.68 -6.38 a 48.41 48.41 0 0 1 6.32 7.14 z m -71.56 -7.52 l 5.67 6.4 a 39.81 39.81 0 0 0 -5 5.67 l -7 -4.86 a 48.43 48.43 0 0 1 6.33 -7.21 z m -6.43 63.47 l 7 -4.85 a 39.81 39.81 0 0 0 5 5.66 l -5.68 6.39 a 48.43 48.43 0 0 1 -6.32 -7.2 z m 71.48 7.16 l -5.66 -6.41 a 39.81 39.81 0 0 0 5 -5.64 l 7 4.87 a 48.43 48.43 0 0 1 -6.33 7.18 z" />
                        </svg>
                    </a>
                </Tooltip>

                <Tooltip content="GitHub">
                    <a href={data.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub Link">
                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                    </a>
                </Tooltip>

                <Tooltip content="Steam">
                    <a href={data.steam} target="_blank" rel="noreferrer noopener" aria-label="Steam Link">
                        <FontAwesomeIcon icon={faSteam} size="2xl" />
                    </a>
                </Tooltip>

                <Tooltip content="Twitch">
                    <a href={data.twitch} target="_blank" rel="noreferrer noopener" className="text-twitch" aria-label="Twitch Link">
                        <FontAwesomeIcon icon={faTwitch} size="2xl" />
                    </a>
                </Tooltip>

                <Tooltip content="Spotify">
                    <a href={data.spotify} target="_blank" rel="noreferrer noopener" className="text-spotify" aria-label="Spotify Link">
                        <FontAwesomeIcon icon={faSpotify} size="2xl" />
                    </a>
                </Tooltip>

                <Tooltip content="Discord">
                    <button onClick={copyDiscord} className="text-discord" aria-label="Copy Discord Tag">
                        <FontAwesomeIcon icon={faDiscord} size="2xl" />
                    </button>
                </Tooltip>
            </div>
        </div>
    );
}
