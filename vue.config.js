// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      //代码中所有/api的形式统一用target替换
      '/api': {
        target: 'http://api.jisuapi.com/news/get', //对应自己的接口
        changeOrigin: true, //允许跨域访问
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}