import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faSteam,
    faTwitch,
    faSpotify,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import Tippy from "@tippyjs/react";
import { toast } from "react-toastify";
import links from ".data/links.json";

export default function Socials({ discordTag }: { discordTag?: string }) {
    function copyDiscord(): void {
        if (!discordTag) return;
        navigator.clipboard.writeText(discordTag);
        toast.success("Copied Discord!");
    }

    return (
        <div className="inline-block p-1 bg-black bg-opacity-50 rounded-md text-2xl">
            <Tippy content="VSCO" theme="blur" arrow={false}>
                <a
                    href={links.vsco}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="align-middle mx-2"
                >
                    <svg
                        aria-hidden={true}
                        focusable={false}
                        className="svg-inline--fa"
                        role="img"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                    >
                        <path d="M50,0a50,50,0,1,0,50,50A50.06,50.06,0,0,0,50,0ZM98,50a48.39,48.39,0,0,1-.25,4.92l-8.49-1c.12-1.27.19-2.57.19-3.87s-.06-2.45-.18-3.66l8.49-1C98,46.87,98,48.42,98,50ZM2,50a48.38,48.38,0,0,1,.24-4.84l8.49,1c-.12,1.25-.19,2.52-.19,3.8s.07,2.55.19,3.8l-8.49,1Q2,52.44,2,50ZM87.3,37.07l8-3a47.63,47.63,0,0,1,2.26,9.32l-8.49,1A39.14,39.14,0,0,0,87.3,37.07ZM87.53,50a37.55,37.55,0,0,1-.72,7.3L78.4,55.36a28.71,28.71,0,0,0,0-10.94l8.42-1.9A37.56,37.56,0,0,1,87.53,50ZM50,76.94A26.94,26.94,0,1,1,76.94,50,27,27,0,0,1,50,76.94Zm.91,10.56,0-8.63a28.7,28.7,0,0,0,10.74-2.45l3.73,7.78A37.27,37.27,0,0,1,50.91,87.51ZM34.49,84.16l3.75-7.77A28.7,28.7,0,0,0,49,78.88l0,8.62A37.27,37.27,0,0,1,34.49,84.16ZM12.47,50a37.55,37.55,0,0,1,.77-7.6l8.41,1.93a28.74,28.74,0,0,0-.07,10.94l-8.42,1.91A37.55,37.55,0,0,1,12.47,50ZM49,12.5v8.63a28.7,28.7,0,0,0-10.59,2.4l-3.74-7.77A37.27,37.27,0,0,1,49,12.5ZM65.43,15.8l-3.77,7.76A28.7,28.7,0,0,0,51,21.12V12.5A37.27,37.27,0,0,1,65.43,15.8ZM86.62,35.24a39.4,39.4,0,0,0-3.48-6.68l7-4.84a47.94,47.94,0,0,1,4.44,8.51Zm-.27,5.38-8.43,1.9a28.82,28.82,0,0,0-4.76-9.8l6.76-5.35A37.41,37.41,0,0,1,86.34,40.62ZM71.92,31.19a29.08,29.08,0,0,0-8.5-6.78l3.77-7.76a37.76,37.76,0,0,1,11.49,9.17ZM69.41,15.63l4-7.56a48.24,48.24,0,0,1,7.87,5.51L75.59,20A39.67,39.67,0,0,0,69.41,15.63Zm-1.73-.92a39.2,39.2,0,0,0-7-2.73l2.07-8.3a47.69,47.69,0,0,1,9,3.47Zm-8.95-3.21a39.4,39.4,0,0,0-7.62-1V2A47.94,47.94,0,0,1,60.8,3.2Zm-9.58-1a39.44,39.44,0,0,0-7.52.88l-2-8.3A48,48,0,0,1,49.16,2Zm-9.43,1.34a39.2,39.2,0,0,0-7.1,2.67L28.66,7a47.68,47.68,0,0,1,9-3.41Zm-8.83,3.58a39.65,39.65,0,0,0-6.25,4.3L19,13.36a48.23,48.23,0,0,1,7.94-5.48Zm2,1.14,3.74,7.77a29.08,29.08,0,0,0-8.52,6.75l-6.74-5.38A37.76,37.76,0,0,1,32.93,16.6ZM20.17,27.26l6.74,5.38a28.82,28.82,0,0,0-4.8,9.78l-8.42-1.93A37.41,37.41,0,0,1,20.17,27.26ZM13.46,35l-8-3A48,48,0,0,1,10,23.47l7,4.86A39.42,39.42,0,0,0,13.46,35Zm-.7,1.83a39.15,39.15,0,0,0-1.83,7.37l-8.48-1a47.63,47.63,0,0,1,2.32-9.38ZM10.93,55.74a39.14,39.14,0,0,0,1.83,7.37l-8,3a47.63,47.63,0,0,1-2.31-9.37Zm2.52,9.21A39.42,39.42,0,0,0,17,71.66l-7,4.85A48,48,0,0,1,5.46,68Zm.13-5.86L22,57.18a28.8,28.8,0,0,0,4.71,9.91L20,72.46A37.4,37.4,0,0,1,13.59,59.09Zm14.33,9.54a29.09,29.09,0,0,0,8.55,6.91L32.72,83.3A37.77,37.77,0,0,1,21.17,74Zm2.94,15.9-4,7.57A48.23,48.23,0,0,1,19,86.62l5.67-6.39A39.65,39.65,0,0,0,30.87,84.53Zm1.74.91a39.2,39.2,0,0,0,7.08,2.67l-2.06,8.3a47.68,47.68,0,0,1-9-3.41Zm9,3.14a39.44,39.44,0,0,0,7.51.89V98a48,48,0,0,1-9.55-1.14Zm9.47.88a39.41,39.41,0,0,0,7.5-.92l2,8.3A48,48,0,0,1,51,98Zm9.4-1.39a39.2,39.2,0,0,0,7.05-2.69l4,7.57a47.68,47.68,0,0,1-9,3.43Zm8.78-3.61a39.65,39.65,0,0,0,6.2-4.29l5.65,6.41A48.24,48.24,0,0,1,73.21,92Zm-2.09-1.11-3.73-7.78A29.08,29.08,0,0,0,72,68.7l6.73,5.39A37.76,37.76,0,0,1,67.16,83.36ZM80,72.56l-6.73-5.39A28.81,28.81,0,0,0,78,57.28l8.41,1.94A37.4,37.4,0,0,1,80,72.56ZM86.54,65l8,3A48,48,0,0,1,90,76.49l-7-4.87A39.42,39.42,0,0,0,86.54,65Zm.7-1.83a39.14,39.14,0,0,0,1.82-7.31l8.48,1a47.63,47.63,0,0,1-2.31,9.31Zm1.83-41-7,4.84a39.8,39.8,0,0,0-5-5.67l5.68-6.38A48.41,48.41,0,0,1,89.07,22.1ZM17.51,14.65l5.67,6.4a39.81,39.81,0,0,0-5,5.67l-7-4.86A48.43,48.43,0,0,1,17.51,14.65ZM11.08,78.12l7-4.85a39.81,39.81,0,0,0,5,5.66l-5.68,6.39A48.43,48.43,0,0,1,11.08,78.12Zm71.48,7.16-5.66-6.41a39.81,39.81,0,0,0,5-5.64l7,4.87A48.43,48.43,0,0,1,82.57,85.28Z" />
                    </svg>
                </a>
            </Tippy>

            <Tippy content="GitHub" theme="blur" arrow={false}>
                <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="align-middle mx-2"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </Tippy>

            <Tippy content="Steam" theme="blur" arrow={false}>
                <a
                    href={links.steam}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="align-middle mx-2"
                >
                    <FontAwesomeIcon icon={faSteam} />
                </a>
            </Tippy>

            <Tippy content="Twitch" theme="blur" arrow={false}>
                <a
                    href={links.twitch}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="align-middle mx-2 text-twitch"
                >
                    <FontAwesomeIcon icon={faTwitch} />
                </a>
            </Tippy>

            <Tippy content="Spotify" theme="blur" arrow={false}>
                <a
                    href={links.spotify}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="align-middle mx-2 text-spotify"
                >
                    <FontAwesomeIcon icon={faSpotify} />
                </a>
            </Tippy>

            <Tippy content="Discord" theme="blur" arrow={false}>
                <button
                    onClick={copyDiscord}
                    className="align-middle mx-2 text-discord"
                >
                    <FontAwesomeIcon icon={faDiscord} />
                </button>
            </Tippy>
        </div>
    );
}
