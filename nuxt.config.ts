// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/preline.client.ts"],
  modules: ["@nuxt/image", "@nuxtjs/seo", "@nuxt/ui", "@vite-pwa/nuxt"],
  site: {
    url: "https://diag-city.netlify.com",
    name: "Diag City - Diagnostics pour votre copropriété, Experts en diagnostics Amiante, Plomb, DPE, loi carrez, PPPT, DTG",
    description:
      "Diag City. Diagnostics pour votre copropriété. Diagnostics vente. Diagnostics location. Diagnostics Amiantes. PPPT. Diagnostics électrique. Diagnostics Loi Carrez. Loi Boutin. Diagnostics D.P.E. Diagnostics Termites, Diagnostics Gaz. Diagnostics Plomb. Diagnostics E.R.P",
    defaultLocale: "fr",
  },
  image: {
    format: ["webp"],
  },
});
