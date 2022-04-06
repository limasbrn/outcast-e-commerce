module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      margin:{
        '-20px':'-20px',
        '-35px':'-35px',
      },
      height: {
        '550': '550px',
      }
    },
    letterSpacing: {
      wider: '20px',
      widest: '35px'
    },
    fontSize: {
      'xs': '8px',
      'sm': '12px',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem'
    }
      
  },
  plugins: []
}