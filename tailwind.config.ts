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
        primary: "#FBEBB5",
        light: "FFFFFF",
      },
      screens: {
				xs: '360px',
				sm: '640px',
				md: '768px',
				lg: '960px',
				xl: '1200px'
			},
			fontFamily: {
				primary: "poppins, sans-serif",
			},
    },
  },
  plugins: [],
};
export default config;
