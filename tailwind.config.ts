import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1':'#000022',
        'color2':'#fbf5f3',
        'color3':'#e28413',
      }
    },
  },
  plugins: [],
} satisfies Config;
