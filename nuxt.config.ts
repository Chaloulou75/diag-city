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
    url: "https://diag-city.netlify.com",
    name: "Diag City - Diagnostics pour votre copropriété",
    description:
      "Diag City. Diagnostics pour votre copropriété. Diagnostics Amiantes. Diagnostics électrique. Diagnostics Loi Carrez. Diagnostics D.P.E. Diagnostics Termites, Diagnostics Gaz. Diagnostics Plomb. Diagnostics E.R.P",
    defaultLocale: "fr",
  },
  image: {
    dir: "assets/img",
  },
});
