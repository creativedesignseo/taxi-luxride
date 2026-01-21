/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FFDB3A',
        'brand-dark': '#1C1F23',
        'brand-yellow-hover': '#E5C434',
      },
    },
  },
  plugins: [],
}
