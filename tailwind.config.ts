/**
 * # Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

- Red: hsl(14, 86%, 42%)
- Green: hsl(159, 69%, 38%)

- Rose 50: hsl(20, 50%, 98%)
- Rose 100: hsl(13, 31%, 94%)
- Rose 300: hsl(14, 25%, 72%)
- Rose 400: hsl(7, 20%, 60%)
- Rose 500: hsl(12, 20%, 44%)
- Rose 900: hsl(14, 65%, 9%)

## Typography

### Body Copy

- Font size (product names): 16px

### Font

- Family: [Red Hat Text](https://fonts.google.com/specimen/Red+Hat+Text)
- Weights: 400, 600, 700

 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: "Red Hat Text",
      },

      // I made it c- because the names are taken
      fontWeight: { "c-light": "400", "c-normal": "600", "c-bold": "700" },
      colors: {
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",

        // rosey as rose is a color in tailwind
        "rosey-50": "hsl(20, 50%, 98%)",
        "rosey-100": "hsl(13, 31%, 94%)",
        "rosey-300": "hsl(14, 25%, 72%)",
        "rosey-400": "hsl(7, 20%, 60%)",
        "rosey-500": "hsl(12, 20%, 44%)",
        "rosey-900": "hsl(14, 65%, 9%)",
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
