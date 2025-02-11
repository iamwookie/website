/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                // darkslate: '#252525', -- Removed as part of black theme.
                twitch: '#6441A5',
                spotify: '#1ED760',
                discord: '#7289DA',
            },
            screens: {
                dt: {
                    raw: '(min-width: 1280px) and (min-height: 720px)',
                },
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
            },
            animation: {
                fadeIn: 'fadeIn 1s',
            },
        },
    },
    plugins: [],
};
