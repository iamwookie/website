import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSteam, faTwitch, faSpotify, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';

import links from '../.data/links.json';

export default function Socials({ discordTag }) {
    function copyDiscord() {
        navigator.clipboard.writeText(discordTag);
        toast.success('Copied Discord!');
    }

    return (
        <div className='mt-4 pt-4 border-t-2 text-xl'>
            <a href={links.github} target='_blank' rel='noreferrer' className='mx-2' >
                <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href={links.steam} target='_blank' rel='noreferrer' className='mx-2' >
                <FontAwesomeIcon icon={faSteam} />
            </a>

            <a href={links.twitch} target='_blank' rel='noreferrer' className='mx-2 text-twitch' >
                <FontAwesomeIcon icon={faTwitch} />
            </a>

            <a href={links.spotify} target='_blank' rel='noreferrer' className='mx-2 text-spotify' >
                <FontAwesomeIcon icon={faSpotify} />
            </a>

            <button onClick={copyDiscord} rel='noreferrer' className='mx-2 text-discord' >
                <FontAwesomeIcon icon={faDiscord} />
            </button>
        </div >
    );
}