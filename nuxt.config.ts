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
  modules: ["@pinia/nuxt", "nuxt-vue3-google-signin"],
  googleSignIn: {
    clientId:
      "849520812776-lqu0btsa0k3tmcs9o4t3h6umirbfpp7r.apps.googleusercontent.com",
  },
  pinia: {
    // storesDirs: ["./stores/index"],
  },
});
