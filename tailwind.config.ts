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
        green: "#38E54D",
        yellow: "#F0FF42",
        grey: "#839AA8",
      },
      dropShadow: {
        "glow-green": ["0px 0px 8px #38E54D"],
        "glow-yellow": ["0px 0px 8px #F0FF42", "0px 0px 8px #F0FF42"],
        "glow-green-1": ["0px 0px 9px #38E54D"],
        "glow-green-2": ["0px 0px 9px #38E54D", "0px 0px 9px #38E54D"],
        "glow-green-3": ["0px 0px 8px #38E54D", "0px 0px 8px #38E54D"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
