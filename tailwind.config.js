/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        'brand-blue': '#202030',
        'brand-pink': '#CF8BA9',
        'brand-green': '#7D98A1',
        'brand-yellow':'#DEF2C8',
        'brand-red':'#711E30',
        'brand-darkpink':'#B11156'
        // 'brand-green': 'rgb(72, 191, 145)',  // RGB example
        // 'custom-dark': 'hsl(210, 12%, 20%)'  // HSL example
      },
      fontFamily: {
        // Define your custom fonts
        sans: ['Abril Fatface'],
      },
    },
  },
  plugins: [],
}

