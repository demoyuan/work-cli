import env from './env.js'

export default {
  mode: 'spa',
  target: 'static',
  components: true,
  telemetry: false,
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
  plugins: ['./plugins/element-ui/element-ui'],
  buildModules: [
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
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    // 多语言配置
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
  axios: {
    proxy: true
  },
  proxy: {},
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
    extend() {}
  }
}
