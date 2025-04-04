import { MetadataRoute } from 'next';

export default function Sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://bil.al',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // {
        //     url: 'https://bil.al/portfolio',
        //     lastModified: new Date(),
        //     changeFrequency: 'weekly',
        //     priority: 0.8,
        // },
    ];
}
