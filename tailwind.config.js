/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#21A038',
        secondary: '#1A8030',
        accent: '#2FC14B',
        success: '#28A745',
        background: '#F5F9F6',
        dark: '#0D4D1F',
      },
    },
  },
  plugins: [],
};
