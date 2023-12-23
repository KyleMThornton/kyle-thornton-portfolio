import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {},
    },
    borderWidth: {
      1: "1px",
    }
  },
  plugins: [require("daisyui")],
  darkMode: ["class", "[data-theme=dark]"],
};
export default config;
