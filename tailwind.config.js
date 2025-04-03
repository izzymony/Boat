module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      extend: {
        screens: {
            xs: '290px',
            sm: '375px',
            md: '678px',
            lg: '850px',
            xl: '1000px',
            xxl: '1200px',
           
          
          },
        colors: {
          primary: '#3498db',
          secondary: '#f1c40f',
        },
        fontFamily: {
          sans: ['Open Sans', 'sans-serif'],
        },
        fontFamily: {
            sora: ['Sora', 'sans-serif'],
            clash: ['Clash Display', 'sans-serif'],
          },
      },

      
    },
    variants: {
      extend: {
        backgroundColor: ['active'],
      },
    },
    plugins: [],
  }