// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/scss/main.scss", "~/assets/font-icon/style.css"],
  modules: ["@pinia/nuxt"],
  pinia: {
    // storesDirs: ["./stores/index"],
  },
});
