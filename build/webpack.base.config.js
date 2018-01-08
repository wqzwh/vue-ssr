const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProd ?
    false :
    '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 'echarts': 'echarts/dist/echarts.common.min.js',
      'vue': 'vue/dist/vue.runtime.min.js',
      '@': path.resolve('src'),
      'R': path.resolve('src/components')
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(less|css)$/,
        use: isProd ?
          ExtractTextPlugin.extract({
            use: ['css-loader?minimize','less-loader'],
            fallback: 'vue-style-loader'
          }) :
          ['vue-style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd ?
    [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        },
        sourceMap: false // true
      }),
      new ExtractTextPlugin({
        filename: 'common.[chunkhash].css'
      }),
      new ExtractTextPlugin({
        filename: 'common.[chunkhash].less'
      })
    ] :
    [
      new FriendlyErrorsPlugin()
    ]
}
