/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue1': 'rgb(245, 248, 250)',
        'custom-blue2': 'rgb(233, 240, 244)',
      },
    },
  },
  variants: {},
  plugins: [],
};
