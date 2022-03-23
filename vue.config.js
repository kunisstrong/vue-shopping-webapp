module.exports = {
    publicPath: './', // 执行 npm run build 统一配置路径
    productionSourceMap: false,
    // 关闭eslint
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.98.123.211',
            },
        },
    },
}
