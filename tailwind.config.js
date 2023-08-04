/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: {
                    DEFAULT: 'hsl(25, 97%, 53%)',
                },
                neutral: {
                    lightgrey: 'hsl(217, 12%, 63%)',
                    mediumgrey: 'hsl(216, 12%, 54%)',
                    darkblue: 'hsl(213, 19%, 18%)',
                    verydarkblue: 'hsl(216, 12%, 8%)',
                }
            },
        },
    },
    plugins: [],
}
