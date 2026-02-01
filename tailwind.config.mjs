/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  safelist: ['opacity-100', 'translate-x-0'],
  theme: {
    extend: {
      colors: {
        cosmic: {
          900: '#070b12',
          800: '#0b1120',
          700: '#0f172a',
          600: '#1b2338'
        },
        starlight: '#e6e8ef',
        nebula: '#7aa2ff',
        aurora: '#c79c3b'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(122, 162, 255, 0.35), 0 10px 30px rgba(7, 11, 18, 0.6)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif']
      }
    }
  },
  plugins: []
};
