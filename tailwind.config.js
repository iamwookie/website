/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'nunito': ['Nunito', 'sans-serif']
            },
            colors: {
                'darkslate': '#252525',
                'twitch': '#6441A5',
                'spotify': '#1ED760',
                'discord': '#7289DA'
            }
        },
    },
    plugins: [],
};
