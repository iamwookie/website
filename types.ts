export type PortfolioItem = {
    name: string;
    description: string;
    bannerURL: string;
    blurDataURL: string;
    link?: string | null;
}

export type SpotifyData = {
    isPlaying: boolean;
}