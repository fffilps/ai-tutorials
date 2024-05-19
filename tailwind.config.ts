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
      fontFamily: {
        'Baskerville-Display-PT-Regular': ["baskerville-display-pt", 'serif'],
        'Baskerville-Poster-PT-Italic': ["baskerville-poster-pt", 'serif'],
        'Bitcount-Mono-Single-Regular-Square': ["bitcount-mono-single-square", 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
