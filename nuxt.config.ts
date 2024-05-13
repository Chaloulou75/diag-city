// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/preline.client.ts"],
  modules: ["@nuxt/image", "@nuxtjs/seo"],
  site: {
    url: "https://diag-city.com",
    name: "Diag City",
    description: "Diag City!",
    defaultLocale: "fr",
  },
});
