export type PortfolioItem = {
    name: string;
    description: string;
    bannerURL: string;
    blurDataURL: string;
    link?: string | null;
}

export type SpotifyData = {
    url?: string;
    name?: string;
    image?: string;
    artists?: string;
    progress?: number;
    duration?: number;
}