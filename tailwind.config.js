/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080810',
        bg2: '#0d0d1a',
        card: '#10101f',
        border: '#1e1e35',
        purple: {
          DEFAULT: '#9333ea',
          light: '#c084fc',
          dim: '#581c87',
        },
        muted: '#6b6b8a',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-reverse': 'float 12s ease-in-out infinite reverse',
        pulse: 'pulse 2s infinite',
        scrollLine: 'scrollLine 2s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        scrollLine: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
