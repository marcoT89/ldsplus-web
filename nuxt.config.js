module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'ldsplus-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'white', height: '2px' },

  loadingIndicator: {
    name: 'folding-cube',
    color: 'white',
    background: '#377dff'
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-directive-waves'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/pwa',
  ],
  plugins: [
    {
      src: '~plugins/velocity.js',
      ssr: false
    },
    {
      src: '~plugins/vue-plugins.js',
      ssr: false
    },
    '~components/shared',
  ]
}
