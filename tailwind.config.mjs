/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#0B908C',
          dark: '#005B64',
          light: '#1BE4BF',
          mint: '#5AF6B6',
        },
        navy: {
          primary: '#053550',
          dark: '#053D5E',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        script: ['Dancing Script', 'cursive'],
        condensed: ['Barlow Condensed', 'Arial Narrow', 'sans-serif'],
        body: ['Barlow', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
