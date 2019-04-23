module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 100, //设计稿宽度的1/10
            unitPrecision: 5, //保留小数点后几位
            propList: ['*', '!font*'],
            selectorBlackList: ['mipx-', 'el-'],
            replace: true,
            mediaQuery: false,
            minPixelValue: 2
        },
        // 添加浏览器前缀
        autoprefixer: {}
    }
}
