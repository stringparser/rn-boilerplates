/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,tsx}', 
    './shared/**/*.{js,ts,tsx}',
    './features/**/*.{js,ts,tsx}'
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
