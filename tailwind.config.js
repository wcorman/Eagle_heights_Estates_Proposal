/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#334A3F',
        accent: '#D8C6A0',
        background: '#EEE9E1',
        dark: '#1E2421',
      },
      fontFamily: {
        heading: ['Sora', 'DM Sans', 'sans-serif'],
        drama: ['"Cormorant Garamond"', 'serif'],
        data: ['"IBM Plex Mono"', 'monospace'],
        body: ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
