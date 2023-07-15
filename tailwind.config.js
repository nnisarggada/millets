/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#ffc599",
        secondary: "#634133",
        accent: "#432818",
      },
      textColor: {
        primary: "#ffc599",
        secondary: "#634133",
        accent: "#432818",
      },
      borderColor: {
        primary: "#ffc599",
        secondary: "#634133",
        accent: "#432818",
      },
      backgroundImage: {
        hero: "url('../src/assets/images/millet.jpg')",
      },
      fontFamily: {
        hindi: "Tiro Devanagari Hindi",
      },
    },
  },
  plugins: [],
};
