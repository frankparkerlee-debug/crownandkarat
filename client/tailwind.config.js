/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        surface: '#1a1a1a',
        'surface-light': '#242424',
        gold: '#c9a962',
        'gold-light': '#d4b978',
        'gold-dark': '#b8984f',
        cream: '#f5f5f0',
        'cream-muted': '#a0a0a0',
        error: '#e53935',
        success: '#43a047',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        // Brand-specific fonts (researched matches)
        'brand-rolex': ['Cormorant Garamond', 'serif'],
        'brand-patek': ['Work Sans', 'sans-serif'],
        'brand-ap': ['Libre Baskerville', 'serif'],
        'brand-omega': ['Jost', 'sans-serif'],
        'brand-cartier': ['Great Vibes', 'cursive'],
        'brand-tudor': ['Cormorant Garamond', 'serif'],
        'brand-iwc': ['Cinzel', 'serif'],
        'brand-vc': ['Josefin Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
        'marquee': 'marquee 50s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
