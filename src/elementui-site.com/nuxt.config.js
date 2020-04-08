import env from './env.js'

export default {
  mode: 'universal',
  srcDir: __dirname,
  buildDir: `.nuxt/${env.domain}`,
  server: {
    port: env.PORT,
    host: env.HOST
  },
  env: {
    storageKey: env.STORAGE_KEY,
    apiRoot: env.API_ROOT
  },
  router: {
    base: env.BASH_URL
  },
  generate: {
    dir: env.GENERATE_DIR
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [{ src: '../common/assets/css/base.scss', lang: 'scss' }],
  plugins: ['./plugins/element-ui/element-ui'],
  buildModules: [
    '@nuxtjs/eslint-module',
    [
      '@nuxt/typescript-build',
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true
      }
    ]
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['../common/assets/css/mixin.scss']
  },
  axios: {},
  build: {
    babel: {
      plugins: [
        [
          'component',
          { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' }
        ]
      ]
    },
    extractCSS: true,
    extend(config, ctx) {}
  }
}
