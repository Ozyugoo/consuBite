/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "custom-black": "#1B1B1B",
      "custom-blackBorder": "rgba(0, 0, 0, 0.08)",
      "custom-red": "#F45156",
      "custom-light": "#f9f9f9",
      "custom-greyDark": "#7c7c7c",
      "custom-white": "#ffffff",
      "custom-redHover": "#FF2F30",
      "custom-redFocus": "#F16F73",
      "secondary-hover": "#FFCDD0",
      "secondary-focus": "#FFEEEF",
      "custom-greyLight": "#f5f5f5",
      "custom-transparent": "rgba(0, 0, 0, 0)",
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
