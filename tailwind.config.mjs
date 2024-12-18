/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        memhirETBlue: {
          500: "#153d59",
          700: "#1b3e98",
        },
        memhirETWhite: {
          500: "#F8F9F5",
        },
        memhirETBlack: {
          300: "#1E1E1E",
          500: "#1E2328",
        },
        memhirETYellow: {
          500: "#f2b41c",
        },
      },
      fontFamily: {
        bauhaus: ["Bauhaus", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
