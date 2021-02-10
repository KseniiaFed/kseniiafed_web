module.exports = {
  purge: ['./client/**/*.html', './client/**/*.jsx', './client/**/*.js'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'slide1': "url('slide1.jpg')",
        'slide2': "url('slide2.jpg')",
        'slide3': "url('slide3.jpg')",
        'slide4': "url('slide4.jpg')",
        'slide5': "url('slide5.jpg')",
        'microscope': "url('img-lab.jpg')"
      }),
      zIndex: {
        '-1': '-1'
      },
      minWidth: {
        '1/3': '33.333333%'
       },
       padding: {
        aspect: '56.25%'
       }
    }
  },
  variants: {
    extend: {
      transform: ['hover']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
}
