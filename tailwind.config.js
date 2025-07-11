/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: '#fdf1ec',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
};
