module.exports = {
    content: [
        './public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "forest",
    },
    theme: {
      extend: {
        colors: {
          'primary-dark': '#262D33',
          'primary-light': '#ffffff'
        },
        screens: {
          'xs': {'min': '360px', 'max': '639px'},

          'sm': {'min': '640px', 'max': '767px'},
          // => @media (min-width: 640px and max-width: 767px) { ... }
    
          'md': {'min': '768px', 'max': '1023px'},
          // => @media (min-width: 768px and max-width: 1023px) { ... }
    
          'lg': {'min': '1024px', 'max': '1279px'},
          // => @media (min-width: 1024px and max-width: 1279px) { ... }
    
          'xl': {'min': '1280px', 'max': '1535px'},
          // => @media (min-width: 1280px and max-width: 1535px) { ... }
    
          '2xl': {'min': '1536px'},
          // => @media (min-width: 1536px) { ... }
          },
          fontFamily: {
            body: ['Montserrat', 'sans-serif']
          },
          container: {
            padding: {
              DEFAULT: '2rem',
              xs: '2rem',
              sm: '3rem',
              lg: '6rem',
              xl: '7rem',
              '2xl': '9rem',
            },
          },
      },
    },
    plugins: [require("daisyui")],
  }