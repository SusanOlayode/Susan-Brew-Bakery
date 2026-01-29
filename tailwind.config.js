/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                espresso: {
                    DEFAULT: '#1C1917',
                    light: '#292524',
                    dark: '#171412',
                },
                cream: {
                    DEFAULT: '#F5F5F4',
                    off: '#FAFAF9',
                },
                gold: {
                    DEFAULT: '#D4AF37',
                    muted: '#C5A028',
                    light: '#F3E5AB',
                },
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem',
            },
            borderRadius: {
                'small': '8px',
                'large': '16px',
            },
            boxShadow: {
                'premium': '0 20px 50px rgba(0, 0, 0, 0.1)',
                'premium-hover': '0 30px 60px rgba(0, 0, 0, 0.15)',
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'fade-in': 'fade-in 0.5s ease-out forwards',
            }
        },
    },
    plugins: [],
}
