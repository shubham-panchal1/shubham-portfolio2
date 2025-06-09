/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
        wobble: 'wobble 0.5s ease-in-out',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(3deg)' },
        },
      }
    },
  },
  plugins: [],
}