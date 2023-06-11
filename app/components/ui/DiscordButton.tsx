'use client';

import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import Tooltip from './Tooltip';

export default function DiscordButton({ discordTag }: { discordTag: string }) {
    function copyDiscord(): void {
        navigator.clipboard.writeText(discordTag);
        toast.success('Copied Discord!');
    }

    return (
        <Tooltip content="Discord">
            <button onClick={copyDiscord} className="align-middle mx-2 text-discord">
                <FontAwesomeIcon icon={faDiscord} />
            </button>
        </Tooltip>
    );
}
