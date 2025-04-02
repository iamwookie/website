import withBundleAnalyzer from '@next/bundle-analyzer';
import withPlaiceholder from '@plaiceholder/next';

const withAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE == 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'skillicons.dev',
            },
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, OPTIONS',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'Content-Type',
                    },
                ],
            },
            {
                source: '/api/avgeek/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://' + process.env.AVGEEK_HOSTNAME,
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'POST, OPTIONS',
                    },
                ],
            },
        ];
    },
};

export default withAnalyzer(withPlaiceholder(nextConfig));
