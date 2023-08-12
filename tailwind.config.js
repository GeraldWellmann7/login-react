/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'atardecer': "url('../src/assets/atardecer.jpg')" 

      }
    },
  },
  plugins: [],
}

