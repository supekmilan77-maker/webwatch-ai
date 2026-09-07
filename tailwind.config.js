/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'dark': '#0B0F17',
          'darker': '#050609',
          'card': '#111823',
          'border': '#1F2937',
          'text': '#E5E7EB',
          'muted': '#9CA3AF',
        },
        'brand-green': '#10B981',
        'brand-red': '#EF4444',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0B0F17 0%, #1F2937 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(17, 24, 35, 0.8) 0%, rgba(31, 41, 55, 0.4) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
