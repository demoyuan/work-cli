module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 75, //设计稿宽度的1/10
            unitPrecision: 5, //保留小数点后几位
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 12
        },
        // 添加浏览器前缀
        autoprefixer: {}
    }
}
