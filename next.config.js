/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'cdn.discordapp.com',
            'i.scdn.co'
        ]
    },
    async redirects() {
        return [
            {
                source: '/kat/invite',
                destination: process.env.DISCORD_ENDPOINT + '/invite',
                permanent: true,
            }
        ]
    }
};

module.exports = nextConfig;
