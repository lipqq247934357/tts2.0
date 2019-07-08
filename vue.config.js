const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // 选项...
    lintOnSave: false,
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)

        }
    }
}
