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
    baseUrl: process.env.VUE_APP_BASE,
    outputDir: `dist/${process.env.VUE_APP_DIST}`,
    assetsDir: 'static',
    productionSourceMap: !init.getEnv(),
    pages: {
        index: {
            entry: 'src/views/index/main.js',
            template: 'public/index.html',
            filename: 'index.html'
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
    css: {
        loaderOptions: {
            sass: {
                data: `@import '@/assets/css/mixin.scss';`
            }
        }
    }
}
