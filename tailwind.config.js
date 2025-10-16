// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#144549", // default text
          500: "#144549", // Big headings
          700: "#CFEAE1", // Markup/accent
        },
        secondary: "#058169", // Top text
      },
      fontFamily: {
        sans: ["sans-serif","Poppins"], // Main text
        ephesis: ["Ephesis", "cursive"], // Decorative
        sour: ["Poppins", "cursive"], // Decorative
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};