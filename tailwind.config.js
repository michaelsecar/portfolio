/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: "#080808",
        dark: "#0f0f11",
        medium: "#7c7c7c",
        light: "#eee5e9",
        primary: "#ffc650",
        secondary: "#f0f757",
        terciary: "#80e797",
        c_yellow: "#eca400",
        c_lightblue: "#006992",
        c_grayblue: "#27476e",
        c_darkblue: "#001d4a",
      },
    },
  },
  plugins: [],
};
