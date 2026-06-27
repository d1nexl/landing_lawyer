import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#05090f',
          900: '#0A1220',
          800: '#0e1a2e',
          700: '#14243e',
          600: '#1a2f52',
        },
        gold: {
          200: '#f5e9c8',
          300: '#ecd89a',
          400: '#dfc06d',
          500: '#C9A96E',
          600: '#a8833f',
          700: '#7d5f28',
        },
        cream: '#F8F5F0',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A96E 0%, #f5e9c8 50%, #C9A96E 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0A1220 0%, #14243e 100%)',
        'hero-gradient': 'radial-gradient(ellipse at 70% 50%, #14243e 0%, #0A1220 60%)',
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-24px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(201,169,110,0.2)' },
          '50%': { boxShadow: '0 0 60px rgba(201,169,110,0.5)' },
        },
      },
      boxShadow: {
        'gold': '0 0 40px rgba(201, 169, 110, 0.3)',
        'gold-lg': '0 0 80px rgba(201, 169, 110, 0.4)',
        'card': '0 4px 40px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}

export default config
