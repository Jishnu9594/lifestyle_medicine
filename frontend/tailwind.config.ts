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
        sans: ['"Inter"', '"Segoe UI"', '"Roboto"', "sans-serif"],
        serif: ['"Lora"', "serif"],
      },
      animation: {
        slideDown: "slideDown 0.8s ease-out",
        fadeInUp: "fadeInUp 0.6s ease-out",
        fadeInDown: "fadeInDown 0.6s ease-out",
        slideInLeft: "slideInLeft 0.6s ease-out",
        slideInRight: "slideInRight 0.6s ease-out",
        scaleIn: "scaleIn 0.6s ease-out",
        blob: "blob-animation 7s infinite",
        imageFloat: "imageFloat 3s ease-in-out infinite",
        imageZoom: "imageZoom 0.8s ease-out forwards",
      },
      keyframes: {
        slideDown: {
          from: {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInDown: {
          from: {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-40px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          from: {
            opacity: "0",
            transform: "translateX(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        scaleIn: {
          from: {
            opacity: "0",
            transform: "scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "blob-animation": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "25%": {
            transform: "translate(20px, -30px) scale(1.05)",
          },
          "50%": {
            transform: "translate(-30px, 20px) scale(0.95)",
          },
          "75%": {
            transform: "translate(15px, 30px) scale(1.02)",
          },
        },
        imageFloat: {
          "0%, 100%": {
            transform: "translateY(0px) rotateZ(0deg)",
          },
          "50%": {
            transform: "translateY(-10px) rotateZ(1deg)",
          },
        },
        imageZoom: {
          from: {
            transform: "scale(1)",
            filter: "brightness(0.9)",
          },
          to: {
            transform: "scale(1.1)",
            filter: "brightness(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
