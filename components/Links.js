import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSteam, faTwitch, faSpotify, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';

const {
  github,
  steam,
  twitch,
  spotify,
  discord
} = require('../links.json');

export default function Links() {
  function copyDiscord() {
    navigator.clipboard.writeText(discord);
    toast.success('Copied Discord!');
  }

  return (
    <div className='mt-4 pt-4 border-t-2 text-xl'>
      <a href={github} target='_blank' className='mx-2' >
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a href={steam} target='_blank' className='mx-2' >
        <FontAwesomeIcon icon={faSteam} />
      </a>

      <a href={twitch} target='_blank' className='mx-2 text-twitch' >
        <FontAwesomeIcon icon={faTwitch} />
      </a>

      <a href={spotify} target='_blank' className='mx-2 text-spotify' >
        <FontAwesomeIcon icon={faSpotify} />
      </a>

      <button onClick={copyDiscord} className='mx-2 text-discord' >
        <FontAwesomeIcon icon={faDiscord} />
      </button>
    </div >
  );
}
