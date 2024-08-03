import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colos: { 
        "audio-orange": "#D87D4A",
        "audio-carbon-black": "#101010",
        "audio-grey": "#F1F1F1",
        "audio-light-grey": "#FAFAFA",
        "audio-white": "#FFFFFF",
        "audio-black": "#000000",
        "audio-orange-chiffon": "#FBAF85",
      }
    },
  },
  plugins: [],
};
export default config;
