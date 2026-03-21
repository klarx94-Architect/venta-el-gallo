/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sacromonte-red': '#8B0000',
        'gold': '#D4AF37',
        'deep-black': '#0A0A0A',
        'metallic-white': '#F8F9FA'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Fira Code', 'monospace']
      },
      letterSpacing: {
        'wide-3': '0.3em',
        'wide-4': '0.4em',
        'wide-5': '0.5em',
      }
    },
  },
  plugins: [],
}
