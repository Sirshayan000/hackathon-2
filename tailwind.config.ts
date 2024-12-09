import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      screens: {
  			sm: '481px',
  			md: '769px',
        lg: '1025px',
  			'max-lg': {
  				'max': '480px'
  			},
    },

   }
  },
  plugins: [],
} satisfies Config;
