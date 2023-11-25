/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "colors":{
        'charcol-black':'#252525',
        'light-beige':'#f7f2e9',
        'warm-gold':'#edc84b'
      }
    },
  },
  plugins: [],
}

