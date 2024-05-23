/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        diagcity: {
          blue: "#3211e6",
          violet: "#903895",
          gray: "#6a6967",
        },
      },
      backgroundImage: {
        desamiantage: "url('public/img/desamiantage.jpg')",
        "conduit-amiante": "url('public/img/conduits_amiantes.jpg')",
        jesse: "url('public/img/jesse.jpeg')",
        archives: "url('public/img/archives.jpeg')",
        bagatelle: "url('public/img/bagatelle.jpeg')",
        "band-amiante": "url('public/img/band-amiante.jpg')",
        "band-copro": "url('public/img/band-copro.jpeg')",
        "band-dpe-2": "url('public/img/band-dpe-2.webp')",
        "band-dpe": "url('public/img/band-dpe.jpg')",
        "band-dtg": "url('public/img/band-dtg.jpg')",
        "band-elec": "url('public/img/band-elec.jpg')",
        "band-gaz": "url('public/img/band-gaz.jpg')",
        "band-history": "url('public/img/band-history.png')",
        "band-mesure": "url('public/img/band-mesure.jpg')",
        "band-plomb": "url('public/img/band-plomb.jpg')",
        "band-ppt": "url('public/img/band-ppt.jpg')",
        "band-termites": "url('public/img/band-termites.jpg')",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
