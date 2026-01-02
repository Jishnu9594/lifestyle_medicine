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
          50: "#FFF5F0",
          100: "#FFEAE0",
          200: "#FFD5C1",
          300: "#FFC0A2",
          400: "#FFAB83",
          500: "#FF9664",
          600: "#E67E52",
          700: "#CC6640",
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
