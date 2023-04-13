/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };
        return config;
    },
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
                destination: 'http://3.68.33.222:3030/invite',
                permanent: true,
            }
        ]
    }
};

module.exports = nextConfig;
