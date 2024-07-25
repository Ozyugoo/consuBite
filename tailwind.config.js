/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "custom-black": "#1B1B1B",
      "custom-black-8": "rgba(0, 0, 0, 0.08)",
      "custom-red": "#F45156",
      "custom-light": "#f9f9f9",
      "custom-grey": "#7c7c7c",
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
