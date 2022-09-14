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
    }
};

module.exports = nextConfig;
