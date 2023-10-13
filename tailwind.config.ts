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
      },
      boxShadow: {
        buton: "0px 6px 0px 0px #000",
      },
    },
  },
  plugins: [],
};
export default config;
