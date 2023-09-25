module.exports = {
    chainWebpack: config => {
        config.module
            .rule('glsl')
            .test(/\.(glsl|vs|fs)$/)
            .use('shader-loader')
            .loader('shader-loader')
    },
}