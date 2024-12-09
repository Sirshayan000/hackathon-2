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
  			
  			md: '769px',

        'sm': { 'raw': '(min-width: 481px) and (max-width: 768px)' },
        

        'max-lg':{
           'max': '480px'
        },

    },

   }
  },
  plugins: [],
} satisfies Config;
