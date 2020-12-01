module.exports = {
    devServer: {
      overlay: {
        warning: false,
        error: false
      },
      proxy: {
        "/api": {
          target: "http://apis.juhe.cn/simpleWeather/query",
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