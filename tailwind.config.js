/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1200px'
      }
    },
    extend: {
      spacing: {
        '28': '7rem', // Defina o tamanho desejado para o ícone
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss']
}
