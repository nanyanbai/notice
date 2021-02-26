module.exports = {
    devServer: {
        proxy: {
            '/api': {
              target: 'http://10.1.5.88:18073', // 请求服务器根路径
              changeOrigin: true, // 是否跨域
              ws: true, // websocket
              pathRewrite: { // 重写路径: 当检测到请求地址里包含 /v1 时,将此路径进行跨域代理操作
                '^/api': ''
            }
            }
        }
    }
}