// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    // Seus caminhos de conteúdo aqui
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
    extend: {
        fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        },
    },
    },
    plugins: [],
};
