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
    },
  },
  plugins: [require("preline/plugin")],
};
