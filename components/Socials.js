import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSteam, faTwitch, faSpotify, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import links from '../.data/links.json';

export default function Socials({ discordTag }) {
    function copyDiscord() {
        navigator.clipboard.writeText(discordTag);
        toast.success('Copied Discord!');
    }

    return (
        <div className='mt-4 text-xl'>
            <Tippy content='GitHub' theme='blur' arrow={false}>
                <a href={links.github} target='_blank' rel='noreferrer' className='align-middle mx-2'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </Tippy>

            <Tippy content='Steam' theme='blur' arrow={false}>
                <a href={links.steam} target='_blank' rel='noreferrer' className='align-middle mx-2'>
                    <FontAwesomeIcon icon={faSteam} />
                </a>
            </Tippy>

            <Tippy content='Twitch' theme='blur' arrow={false}>
                <a href={links.twitch} target='_blank' rel='noreferrer' className='align-middle mx-2 text-twitch'>
                    <FontAwesomeIcon icon={faTwitch} />
                </a>
            </Tippy>

            <Tippy content='Spotify' theme='blur' arrow={false}>
                <a href={links.spotify} target='_blank' rel='noreferrer' className='align-middle mx-2 text-spotify'>
                    <FontAwesomeIcon icon={faSpotify} />
                </a>
            </Tippy>

            <Tippy content='Discord' theme='blur' arrow={false}>
                <button onClick={copyDiscord} rel='noreferrer' className='align-middle mx-2 text-discord'>
                    <FontAwesomeIcon icon={faDiscord} />
                </button>
            </Tippy>
        </div>
    );
}