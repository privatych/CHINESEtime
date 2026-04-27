import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ct-bg': '#060B18',
        'ct-surface': '#0C1526',
        'ct-surface2': '#111D32',
        'ct-red': '#E63946',
        'ct-gold': '#F0A500',
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float2': 'float 9s ease-in-out 3s infinite',
        'pulse-slow': 'pulse-slow 5s ease-in-out infinite',
        'pulse-slow2': 'pulse-slow 7s ease-in-out 2s infinite',
        'gradient': 'gradient-shift 10s ease infinite',
        'fade-up': 'fade-in-up 0.7s ease forwards',
        'fade-up-delay': 'fade-in-up 0.7s ease 0.2s forwards',
        'fade-up-delay2': 'fade-in-up 0.7s ease 0.4s forwards',
        'spin-slow': 'spin 20s linear infinite',
        'count': 'count-up 2s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-25px) scale(1.05)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '0.6' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
        'red-glow': 'radial-gradient(ellipse at center, rgba(230,57,70,0.15) 0%, transparent 70%)',
        'gold-glow': 'radial-gradient(ellipse at center, rgba(240,165,0,0.1) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}

export default config
