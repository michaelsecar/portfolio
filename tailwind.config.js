/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      animation: {
        'card-presentation': 'card 1s ease-in-out 0.5s',
      },
      keyframes:{
        card:{
          '0%': {
            transform: 'rotate(0deg) translateY(+100%)',
          },
          '100%': {
            transform: 'rotate(-6deg) translateY(0%)',
          },
        }
      }
    },
  },
  plugins: [],
}

