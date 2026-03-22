import type { Config } from 'tailwindcss';
import constants from "./src/resources/js/contants.ts";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./resources/**/*.{vue,js,ts,jsx,tsx,php}"
  ],
  theme: {
      screens: {
        xs: { max: `${constants.SCREENS.xs}px` },
        sm: { max: `${constants.SCREENS.sm}px` },
        md: `${constants.SCREENS.md}px`,
        lg: `${constants.SCREENS.lg}px`,
        xl: `${constants.SCREENS.xl}px`,
        "2xl": `${constants.SCREENS.xxl}px`
    },
    extend: {
      boxShadow: {
        DEFAULT: "0px 3px 7px 0px rgba(0, 0, 0, 0.15)",
        "drawer-top": "0px -5px 3px 0px rgba(0, 0, 0, 0.15)",
        "drawer-bottom": "0px 5px 3px 0px rgba(0, 0, 0, 0.15)",
        "none": "0 0 #0000",
      },
      colors: {
        green: {
          DEFAULT: "#1c3b2f",
          800: "#234D45",
        },
        blue: "#E8FDFC",
        white: "#FBFFFE",
        tan: "#EFE8D6",
      },
      fontFamily: {
        // Adds a new font family, usage: font-alex
        alex: ['"Alex Brush"', 'cursive'],
      },
      gridTemplateColumns: {
        "grid-cols-4":
            "grid-template-columns: repeat(4, minmax(0, 1fr))",
        "grid-cols-12":
            "grid-template-columns: repeat(12, minmax(0, 1fr))"
      }
    }
  },
  plugins: []
} satisfies Config