module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      extend: {
       screens: {
        xs: '290px',
        sm: '640px',
        md:'768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
       
      
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