import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "220px",
        ms: "300px",
        s: "460px",
        md: "640px",
        lg: "850px",
        mxl: "1120px",
      },
      colors: {
        primaryColor: "#242526",
        textColor: "#ffffff",
        tertiary: "#f4c095",
        textGray: "#ffffffa8",
      },
    },
  },
  variants: {
    extend: {
      filter: ["hover"],
      boxShadow: ["hover"],
      scale: ["hover"],
    },
  },
  plugins: [],
};
export default config;
