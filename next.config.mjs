import withBundleAnalyzer from '@next/bundle-analyzer';
import withPlaiceholder from '@plaiceholder/next';

const withAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE == 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'skillicons.dev',
            'i.scdn.co'
        ]
    },
};

export default withAnalyzer(withPlaiceholder(nextConfig));
