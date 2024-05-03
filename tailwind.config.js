/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    colors: {
      'brand-primary': '#0fadb6', // bright for attention ..Use this teal color across the site for branding
      'brand-secondary': '#0fadc7', // contrast or call to action
      'brand-dark': '#273444', // subdued for less focus
      'brand-light': '#f9f9f9', // background or light sections
      'brand-accent': '#ffc82c', // for highlights or buttons
      'white': '#fff',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#222222',
      'transparent': 'transparent',
      'dark': '#131313',
      'light': '#fff',
      'light-gray': '#f9f9f9',
      // Additional brand-specific colors if needed can be added here
    },
    extend: {
      backgroundImage: {
        'hero-dark': "url('/src/assets/images/backgrounds/desktop-dark-blob-scene.svg')",
        'hero-light': "url('/src/assets/images/backgrounds/desktop-blob-scene.svg')",
        'hero-dark-mobile': "url('/src/assets/images/backgrounds/mobile-dark-blob-scene.svg')",
      'hero-light-mobile': "url('/src/assets/images/backgrounds/mobile-blob-scene.svg')",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Primary sans-serif font
        merriweather: ['Merriweather', 'serif'], // Secondary serif font
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.6)'
      },
      spacing: {
        '8xl': '96rem', // Very large spacing for extreme cases
        '9xl': '128rem', // Extremely large spacing, consider use cases
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl':'1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '2000px', // Custom breakpoint for wide screens

      }
    },
  },
  plugins: [],
}
