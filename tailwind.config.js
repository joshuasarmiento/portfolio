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
      darkTheme: "lofi",
    },
    theme: {
      extend: {
        screens: {
            xxs: '320px',
            xs: '500px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1536px',
            xxxl: '1620px',
          },
          fontFamily: {
            body: ['Montserrat', 'sans-serif']
          },
      },
    },
    plugins: [require("daisyui")],
  }