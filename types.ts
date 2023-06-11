export type PortfolioItem = {
    name: string;
    description: string;
    bannerURL: string;
    link?: string | null;
}

export type DiscordUser = {
    id: string;
    tag: string;
    username: string;
    discriminator: string;
    avatarURL?: string;
    bannerURL?: string;
    accentHex?: string;
}

export type SpotifyData = {
    url?: string;
    name?: string;
    image?: string;
    artists?: string;
    progress?: number;
    duration?: number;
    blurDataURL?: string;
}