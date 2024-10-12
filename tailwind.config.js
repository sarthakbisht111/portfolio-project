/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        'brand-blue': '#202030',
        'brand-pink': '#B6517D',
        'brand-green': '#7D98A1',
        'brand-yellow':'#DEF2C8',
        'brand-red':'#711E30',
        'brand-darkpink':'#B11156',
        'gradient-orange': '#EEF3D2',
        'gradient-cream': '#EEECF1',
        'grad-brown':'#29465B'
        // 'brand-green': 'rgb(72, 191, 145)',  // RGB example
        // 'custom-dark': 'hsl(210, 12%, 20%)'  // HSL example
      },
      fontFamily: {
        acme: ['Acme', 'sans-serif'],
        abril: ['Abril Fatface', 'cursive'],
      },
    },
  },
  plugins: [],
}

