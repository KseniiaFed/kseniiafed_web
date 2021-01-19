module.exports = {
  purge: ['./client/**/*.html', './client/**/*.jsx', './client/**/*.js'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'laboratory': "url('img-laboratory.jpg')",
        'microscope': "url('img-lab.jpg')"
      }),
      zIndex: {
        '-1': '-1'
      }
    }
  },
  variants: {
    extend: {
      transform: ['hover']
    }
  },
  plugins: []
}
