export type Stats = {
    uptime: string;
    ram_usage: string;
    ws_ping: number;
    guilds: number;
    users: number;
};

export type PortfolioItem = {
    name: string;
    description: string;
    bannerURL: string;
    link?: string;
}