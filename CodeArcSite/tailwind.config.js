/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'wave': 'wave 8s ease-in-out infinite',
        'background-shift': 'background-shift 30s linear infinite',
        'glow': 'glow 4s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 2rem))' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px)' },
        },
        'background-shift': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        },
        glow: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.2' },
        },
      },
      backgroundImage: {
        'lines': 'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'lines-glow': 'linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
} 