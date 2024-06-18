/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '9/16': '9/16',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          default: '768px',
        },
      },
    },
    colors: {
      'azul-ancora': '#023a5d',
      'vermelho-ancora': '#d02131',
      fundo: '#FCFCFF',
    },
  },
  plugins: [],
};
