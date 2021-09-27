// webpack.config.js

const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
  configureWebpack: {
    mode: "production", //修改成生产环境
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      // new BundleAnalyzerPlugin({
      //   analyzerMode: "server",
      //   analyzerHost: "127.0.0.1",
      //   analyzerPort: 8889,
      //   reportFilename: "report.html",
      //   defaultSizes: "parsed",
      //   openAnalyzer: true,
      //   generateStatsFile: false,
      //   statsFilename: "stats.json",
      //   statsOptions: null,
      //   logLevel: "info",
      // }),
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: productionGzipExtensions,
        threshold: 10240,
        minRatio: 0.8,
      }),
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
