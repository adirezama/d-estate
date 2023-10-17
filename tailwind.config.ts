import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: [`var(--font-nunito)`],
        manrope: [`var(--font-manrope)`],
        aleo: [`var(--font-aleo)`],
      },
      colors: {
        primary: "#292A2E",
        background: "#F4F9FC",
        blueDark: "#3085C3",
        blueLight: "#5CD2E6",
      },
      boxShadow: {
        button: "0px 6px 0px 0px #000",
        buttonActive: "0px 1px 0px 0px #000",
        buttonHover: "0px 7px 0px 0px #000",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
