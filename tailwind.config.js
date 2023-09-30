/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    fontFamily: {
       'sans': ['sans-serif', 'system-ui'],
       'serif': ['serif', 'system-ui'],
       'mono': ['monospace', 'system-ui']
    },
    extend: {},
  },
  plugins: [],
}

