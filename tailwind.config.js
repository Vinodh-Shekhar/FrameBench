/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0f14',
        surface: '#111821',
        'surface-alt': '#1a1f27',
        accent: '#00ff41',
        'accent-dark': '#00cc33',
        'accent-light': '#33ff66',
        border: '#1f2937',
        text: {
          primary: '#ffffff',
          secondary: '#a1a5b0',
          tertiary: '#6b7280',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 255, 65, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 255, 65, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(0, 255, 65, 0.1)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 65, 0.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
