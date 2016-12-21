const webpackBase = require('./webpack.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = {
  entry: webpackBase._entry,
  output: webpackBase._output,
  module: webpackBase._module,
  plugins: [
    new ExtractTextPlugin('styles/[name].css'),
    new HtmlWebpackPlugin({
      template: config.srcDir + '/index.html',
      filename: config.buildDir + '/views/index.html'
    })
  ]

};
module.exports = devConfig;