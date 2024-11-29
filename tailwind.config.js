/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-3xl': '1840px'
      },
      transitionDuration: {
        DEFAULT: '350ms'
      },
      transitionTimingFunction: {
        // DEFAULT: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)'
      },
      colors: {
        accent: 'var(--color-accent)',
        dark: 'var(--color-dark)'
      },
      fontFamily: {
        jakarta: 'var(--font-jakarta)'
      }
    }
  },
  plugins: []
};
