import { MetadataRoute } from 'next';

export default function Sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://bil.al',
            lastModified: new Date(),
        },
        {
            url: 'https://bil.al/portfolio',
            lastModified: new Date(),
        },
    ];
}
