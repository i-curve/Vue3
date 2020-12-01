module.exports = {
    devServer: {
        overlay: {
            warning: false,
            error: false
        },
        proxy: {
            "/api": {
                target: "http://127.0.0.1",
                changeOrigin: true,
                ws: false,
                secure: false,
                pathRewrite: {
                    "/api": ""
                }
            }
        }
    },
    lintOnSave: false,
    publicPath: './',
	assetsDir: "assets",
	productionSourceMap: false,
	outputDir: 'dist'
}