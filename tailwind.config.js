/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Thème Clair (Hero)
        'leela-white': '#FFFFFF',
        'leela-light-gray': '#F5F7FA',
        'leela-dark-blue': '#0A0F1C',
        'leela-slate': '#334155',
        // Thème Sombre
        'leela-slate-light': '#94A3B8',
        'leela-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

