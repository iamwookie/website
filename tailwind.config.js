/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'darkslate': '#252525',
                'twitch': '#6441A5',
                'spotify': '#1ED760',
                'discord': '#7289DA',
            }
        },
    },
    plugins: [],
};
