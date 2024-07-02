// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  runtimeConfig: {
    public: {
      googleApiKey: process.env.NUXT_GOOGLE_API_KEY,
    },
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
  modules: [
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxt/ui",
    "@vite-pwa/nuxt",
    "nuxt-gtag",
  ],
  site: {
    url: "https://www.diag-city.fr",
    name: "Diag City - Diagnostics pour votre copropriété, Experts en Diagnostics Immobiliers, Amiante, Plomb, DPE, loi carrez, PPPT, DTG",
    description:
      "Diag City. Diagnostics pour votre copropriété. Diagnostics Immobiliers. Diagnostics vente. Diagnostics location. Diagnostics Amiantes. PPPT. Diagnostics électrique. Diagnostics Loi Carrez. Loi Boutin. Diagnostics D.P.E. Diagnostics Termites, Diagnostics Gaz. Diagnostics Plomb. Diagnostics E.R.P",
    defaultLocale: "fr",
  },
  image: {
    format: ["webp"],
  },
  gtag: {
    id: "G-3J9T3R3BJ3",
  },
});
