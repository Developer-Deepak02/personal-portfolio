// tailwind.config.mjs

import { join } from "path";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		join(__dirname, "pages/**/*.{js,ts,jsx,tsx,mdx}"),
		join(__dirname, "components/**/*.{js,ts,jsx,tsx,mdx}"),
		join(__dirname, "app/**/*.{js,ts,jsx,tsx,mdx}"), // for app directory support
	],
	theme: {
		extend: {
      colors:{
        lightHover:"#fcf4ff",
        darkHover:"#2a004a",
       darkTheme:"#11001f",
      },
      fontFamily:{
        Outfit : ["Outfit","sans-serif"],
        Ovo : ["Ovo","serif"]
      }
    },
	},
	plugins: [],
};
