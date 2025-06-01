/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Serif CJK SC', 'Noto Serif CJK JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}