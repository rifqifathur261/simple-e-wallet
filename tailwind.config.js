module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#5B75F0',
      'primary-light': '#DBE1FC',
      'secondary': '#EDF4FD',
      'secondary-light': '#EDF4FD',
      'accent': '#FFA63A',
      'accent-light': '#FFF2E2',
      'accent2': '#5FD9F9',
      'accent2-light': '#DFF7FE',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#70839B',
      'gray': '#8492a6',
      'gray-light': '#CDD5DE',
      'white': '#fff',
      'black': '#000',
      'orange': '#FF6D3B',
      'blue-light': '#49B3FF',
      'blue-dark': '#4868FF',
      'blue-sky-light': '#5DE7FE',
      'blue-sky-dark': '#2DA9E8',
      'cyan-light': '#4CDF64',
      'cyan-dark': '#46CEA3',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        'roboto-b': ["Roboto-Bold", "sans-serif"],
      }
    }
  },
  plugins: [],
}
