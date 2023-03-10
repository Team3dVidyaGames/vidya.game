const colors = require('tailwindcss/colors')
const SIZES = require('./common/static.js')

const allowableSizes = Object.keys(SIZES).reduce((o, key) => Object.assign(o, {[key]: `${SIZES[key]}px`}), {});

module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')
  ],
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './react-bricks/**/*.tsx',
    './node_modules/react-bricks-ui/**/*.js',
  ],
  darkMode: 'class',
  variants: {
    scrollbar: ['dark', 'rounded']
  },
  theme: {
    typography: {
      DEFAULT: {
        css: {
          'scrollbar-thin': {
            '&::-webkit-scrollbar': {
              width: '5px',
            }
    
          },
          margin: '0 auto',
          padding: '0',
          'max-width': '100%',
          'text-decoration': 'none',
          'color': colors.gray['100'],
          img: {
            'margin-top' : '0',
            'margin-bottom' : '0',
          },
          a: {
            'text-decoration': 'none',
            'font-size': '14px',
            'line-height': '22px',
            'letter-spacing': '2px',
            'font-family': 'Saira Semi Condensed',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          h1: {
            'font-weight': 900,
            'font-size': '80px',
            'line-height': '80px',
            'font-family': 'Saira Semi Condensed',
            'text-transform': 'uppercase',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          h2: {
            'font-weight': 900,
            'font-size': '60px',
            'line-height': '60px',
            'font-family': 'Saira Semi Condensed',
            'text-transform': 'uppercase',
            'margin-top': 0,
            'margin-bottom': 0,
            'text-decoration': 'none',
            'border': 'none'
          },
          h3: {
            'font-weight': 900,
            'font-size': '45px',
            'line-height': '45px',
            'font-family': 'Saira Semi Condensed',
            'text-transform': 'uppercase',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          h4: {
            'font-weight': 900,
            'font-size': '32px',
            'font-family': 'Saira Semi Condensed',
            'line-height': '32px',
            'text-transform': 'uppercase',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          h5: {
            'font-weight': 900,
            'font-size': '20px',
            'line-height': '20px',
            'font-family': 'Saira Semi Condensed',
            'text-transform': 'uppercase',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          span: {
            'line-height': 'auto',
          },
          h6: {
            'font-weight': 700,
            'font-size': '14px',
            'line-height': '14px',
            'font-family': 'Saira Semi Condensed',
            'text-transform': 'uppercase',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          p: {
            'font-size': '14px',
            'line-height': '22px',
            'font-family': 'Saira Semi Condensed',
            'letter-spacing': '2px',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          ul: {
            'padding': '0',
            'margin': '0'
          },
          'ul li': {
            padding: '0rem'
          },
          li: {
            'list-style': 'none',
            'padding-left': '0em'
          },
          div: {
            'line-height': '22px',
            'letter-spacing': '0px',
          }
        }
      }
    },
    extend: {
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
      },
      gridTemplateColumns: {
        'fill-100': 'repeat(auto-fill, minmax(144px, 1fr))',
        'fill-keep-4': 'repeat(auto-fit, minmax(min(100%/2, max(144px, 100%/5), 1fr))',
      },
      screens: {
        'tablet': {'raw': 'only screen and (max-width: 768px)'},  
        // 'tablet': '768px',
        'mobile': {'raw': 'only screen and (max-width: 430px)'},
      },
      spacing: {
        'vsm': '10px',
        'vmd': '20px',
        'vlrg': '30px',
        'vxl': '60px'
      },
      keyframes: {
        brightGlow: {
          '0%': {
            filter: 'brightness(1.3)',
          },
          '50%' : {
            filter: 'brightness(1.0)',
          },
          '100%': {
            filter: 'brightness(1.7)',
          },
        },
        brightBlurGlow: {
          '0%': {
            filter: 'brightness(1.1) invert(0)',
            transform: 'scale(1)',
          },
          '100%': {
            filter: 'brightness(1.7) invert(0.05)',
            transform: 'scale(1.05)',
          }
        },
        brightGlower: {
          '0%': {
            filter: 'brightness(1.1)',
            transform:' scale(.8)'
          },
          '50%' : {
            filter: 'brightness(1.0)',
            transform: 'scale(.7)'
          },
          '100%': {
            filter: 'brightness(2.2)',
            transform: 'scale(.9)'
          },
        },
        scroll: {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(40px)'
          }
        }
      },
      animation: {
        scroll: 'scroll 1.5s infinite',
        brightGlowSlow: 'brightBlurGlow 2.5s ease-in-out infinite alternate',
        brightGlow: 'brightGlow 2s ease-in-out infinite alternate',
        brightGlower: 'brightGlower 1s ease-in-out infinite alternate',
        'spin-fast': 'spin 0.7s linear infinite',
        'spin-slow': 'spin 2s linear infinite',
      },
      width: {
        ...allowableSizes,
        'page': '1280px',
        'blog': '940px'
      },
      maxWidth: {
        ...allowableSizes,
        'page': '1280px',
        'blog': '940px',
        'page-header': '1280px',
        'page-modal': '1840px'
      },
      minWidth: {
        ...allowableSizes,
      },
      height: {
        ...allowableSizes,
      },
      maxHeight: {
        ...allowableSizes,
      },
      minHeight: {
        ...allowableSizes,
      },
      letterSpacing: {
        'cta': '2px',
      },
      lineHeight: {
        'cta': '22px',
        'standfirst':'45px',
      },
      fontFamily: {
        'saria': ['Saira Semi Condensed', 'Roboto'],
        'roboto': ['Roboto', 'sans-serif'],
        'nunito': ['Nunito', 'Roboto'],
        'poppins': ['Poppins', 'sans-serif'] 
      },
      transitionProperty: {
        'width': 'width',
        'margin': 'margin',
      }
    },
    borderRadius: {
      full: '9999px',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      xl: '1rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '5xl': '5rem',
      '6xl': '6rem',
      '7xl': '7rem',
      lxl: '30px',
      lgr: '20px',
      sm: '10px',
      xs: '5px'
    },
    boxShadow: {
      'dark-md': '0px 0px 80px rgba(0, 0, 0, 0.5)',
      'btn-light': '0 12px 32px -12px rgb(199 207 255 / 100%)',
      'btn-dark': '0px 20px 30px -5px #00000080',
      'light-md': '0px 0px 60px rgba(199, 207, 255, 0.3)',
      'light-sm': '0px 0px 30px rgba(199, 207, 255, 0.2)',
      'light': '0px 40px 60px -25px #C7CFFF4D',
      'accent': '0px 30px 40px -15px #734a9e',
      'dark': '0px 40px 80px -25px rgba(0, 0, 0, 0.5)',
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      'title': '300px',
      'h1': '80px',
      'h2': '60px',
      'h3': '45px',
      'h4': '32px',
      'h5': '20px',
      'h6': '14px',
      'standfirst': '30px',
      'body': '18px',
      'body-sm': '14px', 
      'body-xs': '12px',
      'xs': '8px'
    },
    colors: {
      ...colors,
      'primary': {
        '100': '#651AB7',
      },
      'secondary': {
        '100': '#C7CFFF'
      },
      'tertiary': {
        '100': '#E49696'
      },
      'aimbotsRed': {
        100: '#FF4365'
      },
      'aimbotsGreen': {
        100: '#63ADB7'
      },
      'aimbotsDark': {
        100: '#10151F',
        200: '#1E242E'
      },
      'dark': {
        100: '#0d0d0d',
        200: '#11081F',
        300: '#211436',
        400: '#2F2F2F',
        500: '#3F3F3F',
      },
      'light': {
        100: '#fafafa',
        200: '#FAFBFF',
        250: '#EEF0F6',
        300: '#E9EBF3',
        400: '#D8DEE9',
        500: '#C7CFFF',
      },
      'accent': {
        600: '#401F68',
      },
      'accent-dark': {
        100: '#d3aaff',
        200: '#c574e8',
        600: '#401F68',
        700: '#734a9e',
        800: '#651AB7'
      },
      'accent-light': {
        100: '#c7cfff'
      }
    }
  },
}
