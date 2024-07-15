import { transform } from "next/dist/build/swc";
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
        s: "460px",
        md: "640px",
        lg: "800px",
      },
      colors: {
        primaryColor: "#373229",
        textColor: "#eaddcf",
        tertiary: "#f4c095",
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
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".custom-blur-brightness": {
          filter: "blur(0px) brightness(100%)",
        },
        ".custom-activity-hover": {
          filter: "blur(0.1px) brightness(30%)",
          transition: "filter 0.5s",
        },
        ".image-hover-effect:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        },
        ".transform-style-3d": {
          transformStyle: "preserve-3d",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".rotate-y-360": {
          transform: "rotateY(360deg)",
        },
        ".-rotate-y-180": {
          transform: "rotateY(-180deg)",
        },
        ".rotate-y-0": {
          transform: "rotateY(0deg)",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".perspective": {
          perspective: "150rem",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
