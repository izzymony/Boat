module.exports = {
    mode: 'jit',
    purge: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          xs: '290px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
        colors: {
          // Brand Colors - Ocean Theme
          ocean: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9', // Primary
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
          },
          sand: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#eab308', // Accent
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12',
          },
          // Semantic Colors
          success: {
            light: '#d1fae5',
            DEFAULT: '#10b981',
            dark: '#065f46',
          },
          warning: {
            light: '#fef3c7',
            DEFAULT: '#f59e0b',
            dark: '#92400e',
          },
          error: {
            light: '#fee2e2',
            DEFAULT: '#ef4444',
            dark: '#991b1b',
          },
          info: {
            light: '#dbeafe',
            DEFAULT: '#3b82f6',
            dark: '#1e3a8a',
          },
        },
        fontFamily: {
          sans: ['Sora', 'system-ui', 'sans-serif'],
          sora: ['Sora', 'sans-serif'],
          clash: ['Clash Display', 'sans-serif'],
        },
        fontSize: {
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.5rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
          '6xl': ['3.75rem', { lineHeight: '1' }],
        },
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '128': '32rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        boxShadow: {
          'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
          'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'fade-in-up': 'fadeInUp 0.6s ease-out',
          'slide-in-right': 'slideInRight 0.3s ease-out',
          'slide-in-left': 'slideInLeft 0.3s ease-out',
          'scale-in': 'scaleIn 0.2s ease-out',
          'bounce-slow': 'bounce 3s infinite',
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
          slideInRight: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          slideInLeft: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          scaleIn: {
            '0%': { transform: 'scale(0.9)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
        backdropBlur: {
          xs: '2px',
        },
      },
    },
    variants: {
      extend: {
        backgroundColor: ['active', 'disabled'],
        textColor: ['active', 'disabled'],
        opacity: ['disabled'],
        cursor: ['disabled'],
        borderColor: ['focus-visible'],
        ringWidth: ['focus-visible'],
        ringColor: ['focus-visible'],
      },
    },
    plugins: [],
  }