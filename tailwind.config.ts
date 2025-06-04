import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1A1313",
        light: "#DCD3D2",
        babyBlue: "#43AEFB", // primary
        muddyGreen: "#143236", // secondary
        slateGreen: "#3B545E",
        rouge: "#D92525", //danger
        // primary: ,
        // secondary: ,
        // info: ,
        // success: ,
        // danger: #6F5151,
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        leagueGothic: ["var(--font-league-gothic)"],
      },
      backgroundImage: {
        "hero-image": "url('/network-vid-white.mp4')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
});
export default config;
