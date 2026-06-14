/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e0edff',
                    100: '#bfd6ff',
                    200: '#8bb9ff',
                    300: '#4f8fff',
                    400: '#1e70ff',
                    500: '#0055DA',
                    600: '#0045b4',
                    700: '#003a90',
                    800: '#002f6c',
                    900: '#001f44',
                },
                secondary: {
                    50: '#fffce9',
                    100: '#fff5c1',
                    200: '#ffeb8a',
                    300: '#ffe24b',
                    400: '#f8df6a',
                    500: '#F0E76F',
                    600: '#d9cd61',
                    700: '#b0a54b',
                    800: '#857a36',
                    900: '#5d5527',
                },
            },
            fontFamily: {
                sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            boxShadow: {
                soft: '0 2px 8px rgb(0 0 0 / 0.08)',
                medium: '0 4px 16px rgb(0 0 0 / 0.1)',
                lg: '0 8px 24px rgb(0 0 0 / 0.12)',
            },
            animation: {
                fadeIn: 'fadeIn 0.3s ease-in',
                slideUp: 'slideUp 0.3s ease-out',
                slideDown: 'slideDown 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            spacing: {
                '4.5': '1.125rem',
                '13': '3.25rem',
                '15': '3.75rem',
            },
        },
    },
    plugins: [],
}