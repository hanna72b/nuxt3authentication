const darkMode = require("tailwindcss-dark-mode");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./assets/scss/main.scss",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
    variants: {
      backgroundColor: [
        "dark",
        "dark-hover",
        "dark-group-hover",
        "dark-even",
        "dark-odd",
        "light",
      ], // اضافه کردن کلاس‌های light برای background color
      textColor: ["dark", "dark-hover", "dark-active", "light"], // اضافه کردن کلاس‌های light برای text color
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwindcss-dark-mode")(),
  ],
};
