import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customDefault: "rgb(225, 161, 0)",
        customPrimary: "rgb(0, 176, 240)",
        customSuccess: "rgb(0, 113, 103)",
        customAlert: "rgb(252, 97, 86)",
        customLight: "rgb(239, 239, 239)",
        customSecondary: "rgb(0, 29, 41)",
        customContentSubtitle: "rgb(178, 184, 205)",
        customContentBackground: "rgb(248, 248, 253)",
        customGrayBorder: "rgb(255,255,255,0.1)",
        customGrayText: "rgb(174, 178, 183)",
        customDarkBgTransparent: "rgb(31, 32, 35, 0.7)",
        customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
        customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)",
        customGradient: "linear-gradient(to bottom, #00AFEF, #48CA7D)",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
