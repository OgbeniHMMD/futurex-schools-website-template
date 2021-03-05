module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1em',
    },
    extend: {
      colors: {
        primary: '#066d36',
        secondary: '#A6EBC9',
        accent: '#fffbdb',
      },
    },
  },
  variants: {},
  plugins: [],
}
