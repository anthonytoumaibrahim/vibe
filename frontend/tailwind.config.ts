import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        sans: ["var(--font-k2d)"],
        display: ["var(--font-caveat)"],
      },
      colors: {
        primary: {
          "50": "#faf6fe",
          "100": "#f3eafd",
          "200": "#ead8fc",
          "300": "#d9b9f9",
          "400": "#c28cf4",
          "500": "#aa60ec",
          "600": "#953fde",
          "700": "#7f2dc3",
          main: "#6c2a9f",
          "900": "#582380",
          "950": "#3b0d5e",
        },
        secondary: {
          "50": "#f4faeb",
          "100": "#e4f4d3",
          "200": "#cceaac",
          "300": "#aadb7b",
          "400": "#8aca51",
          "500": "#6baf33",
          main: "#5d9f2a",
          "700": "#406b20",
          "800": "#35551f",
          "900": "#2f491e",
          "950": "#16280b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
