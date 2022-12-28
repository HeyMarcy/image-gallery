/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        highlight: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
      },
      screens: {
        narrow: { raw: "(max-aspect-ratio: 3 / 2)" },
        wide: { raw: "(min-aspect-ratio: 3 / 2)" },
        "taller-than-854": { raw: "(min-height: 854px)" },
      },
      fontFamily: {
        sans: ["Lato", "arial", "helvetica", "sans-serif"],
      },
      fontSize: {
        xs: "0.7rem",
        sm: "0.85rem",
        base: "1rem",
        xl: '1.25rem',
        // '2xl': '1.563rem',
        // '3xl': '1.953rem',
        // '4xl': '2.441rem',
        // '5xl': '3.052rem',
      },
    },
  },
  plugins: [],
};
