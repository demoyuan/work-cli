class Init {
    constructor() {
        this.env = process.env.NODE_ENV
    }

    getEnv() {
        return this.env === 'production' ? true : false
    }
}

let init = new Init()

module.exports = {
    lintOnSave: true,
    publicPath: process.env.VUE_APP_BASE,
    outputDir: `dist/${process.env.VUE_APP_DIST}`,
    assetsDir: 'static',
    productionSourceMap: !init.getEnv(),
    pwa: {
        /* Service Worker 刷新 */
        workboxOptions: {
            skipWaiting: true,
            clientsClaim: true
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@c': '@/components',
                '@u': '@/utils',
                '@m': '@/mixins',
                '@vIndexPage': '@/views/index/pages'
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import '@/assets/css/mixin.scss';`
            }
        }
    },
    devServer: {
        disableHostCheck: true,
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true
            }
        }
    },
    pages: {
        index: {
            entry: 'src/views/index/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    }
}
