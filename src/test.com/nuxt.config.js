import env from './env.js'
const domain = 'test.com'

export default {
  mode: 'universal',
  srcDir: __dirname,
  buildDir: `.nuxt/${domain}`,
  server: {
    port: env.PORT,
    host: env.HOST
  },
  env: {
    storageKey: env.STORAGE_KEY,
    apiRoot: env.API_ROOT
  },
  router: {
    base: env.BASE_URL
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
  plugins: [],
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
    '@nuxtjs/style-resources',
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'en', iso: 'en-US', file: 'en-US.js' },
          { code: 'cn', iso: 'zh-CN', file: 'zh-CN.js' }
        ],
        defaultLocale: 'cn',
        lazy: true,
        langDir: 'lang/'
      }
    ]
  ],
  styleResources: {
    scss: ['../common/assets/css/mixin.scss']
  },
  axios: {},
  build: {
    extend(config, ctx) {}
  }
}
