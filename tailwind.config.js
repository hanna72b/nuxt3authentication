/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./assets/scss/main.scss",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
