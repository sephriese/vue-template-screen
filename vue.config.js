let plugins = []
// process.env.VUE_APP_TITLE = require('./package.json').name
const path = require('path')
module.exports = {
  lintOnSave: false,
  productionSourceMap: process.env.NODE_ENV === 'development',
  // devServer: {
  //   disableHostCheck: true,
  //   before: require('./mock/mock-server.js')
  // },
  // parallel: require('os').cpus().length > 1,
  configureWebpack: {
    //webpack的相关配置在这里
    plugins: plugins,
    externals: {
      // AMap: 'AMap' // 高德地图配置
    }
  },
  chainWebpack: config => {
    const fontRule = config.module.rule('fonts')
    fontRule.test(/\.(eot|ttf|otf|woff|woff2?)(\?.*)?$/)
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: process.env.NODE_ENV !== 'development',
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true,
    loaderOptions: {
      less: {
        javascriptEnabled: true
        // modifyVars: {
        //   // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
        //   hack: `true; @import '/src/style/reset.less'`,
        // },
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/style/minix.less')]
    }
  }
}
