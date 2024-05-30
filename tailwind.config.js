/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: { primary: '#ffb400' },
      keyframes: {
        'loading-page': {
          from: { top: 0, height: '100vh' },
          to: { top: '100vh', height: 0 },
        },
        progress: { '100%': { inset: 0 } },
        blinkTextCursor: {
          from: { 'border-right-color': 'var(--primary)' },
          to: { 'border-right-color': 'transparent' },
        },
      },
      animation: {
        'progress-loading': 'progress 1.6s infinite',
        'page-loading': '0.9s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 normal both running loading-page',
        'typewriter-blink-text-cursor': 'blinkTextCursor 500ms steps(44) infinite',
      },
    },
  },
  plugins: [],
}
