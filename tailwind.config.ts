import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf5f0',
          100: '#f5ebe2',
          200: '#e8d4c4',
          300: '#d9b89f',
          400: '#c79a7b',
          500: '#a6754a',
          600: '#8b5c3b',
          700: '#6d4423',
          800: '#5c3a1b',
          900: '#4a2f16',
        },
        sky: {
          light: '#87CEEB',
          bright: '#87CEEB',
          golden: '#FFD700',
          sunset: '#FF6B35',
          night: '#0F2C5B',
        },
      },
      fontFamily: {
        pixel: ['Press Start 2P', 'cursive'],
        body: ['Be Vietnam Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        drift: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '100%': { transform: 'translateX(100px) translateY(-100px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        sway: 'sway 2s ease-in-out infinite',
        drift: 'drift 8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;