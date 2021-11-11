// webpack.config.js

// const Components = require("unplugin-vue-components/webpack");
// const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  productionSourceMap: false,

  configureWebpack: {
    mode: "production", //修改成生产环境
    plugins: [
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),
    ],
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://blog.com", //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
  },
};
