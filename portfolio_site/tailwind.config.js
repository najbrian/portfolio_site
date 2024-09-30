/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'clamped': 'clamp(1rem, 3vw, 5rem)',
        'clamped2': 'clamp(1rem, 2vw, 5rem)',
        'aboutme': 'clamp(1rem, 1vw, 5rem)'
      },
      colors: {
        pastelGreen: '#C0C78C',
        moss: '#A6B37D',
        cream: '#FEFAE0',
        pastelBrown: '#B99470',
    
      },
      animation: {
        jump: 'jump 0.2s ease-in-out',
        fadeLeft: 'fadeLeft 0.5s ease-in-out',
        fadeInRight: 'fadeInRight 0.5s ease-in-out',
        spin: 'spin 0.5s linear infinite'
      },
      keyframes: {
        jump: {
          '0% 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        spin: {
          '0%': {transform: 'rotate(0deg)'},
          '30%': {transform: 'rotate(5deg)'},
          '60%': {transform: 'rotate(-5deg)'},
          '99%': {transform: 'rotate(-0deg)'}

        }
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'system-ui'],
      montserrat: ['Montserrat', 'system-ui'],
    }
  },
  plugins: [],
}

