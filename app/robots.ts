import { MetadataRoute } from 'next';

export default function Robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://bil.al/sitemap.xml',
    };
}
