import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E8F5EF",
          100: "#D1EADE",
          200: "#A3D5BD",
          300: "#75C09C",
          400: "#47AB7B",
          500: "#1E7F4F",
          600: "#1a6843",
          700: "#155a37",
        },
        background: "#FFFFFF",
        text: "#111111",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
