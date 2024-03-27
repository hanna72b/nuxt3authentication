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
  modules: [
    "@pinia/nuxt",
    "nuxt-vue3-google-signin",
    "tailwindcss-dark-mode",
    "@nuxtjs/color-mode",
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  googleSignIn: {
    clientId:
      "849520812776-lqu0btsa0k3tmcs9o4t3h6umirbfpp7r.apps.googleusercontent.com",
  },
  pinia: {
    // storesDirs: ["./stores/index"],
  },
});
