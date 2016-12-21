const config = require('./config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const baseConfig = {
  _entry: config.srcDir + '/app.js',
  _output: {
    filename: 'scripts/[name].js',
    path: config.buildDir + '/assets/'
  },
  _module: {
    rules: [{
      test: /\.vue?$/,
      include: [
        path.resolve(config.srcDir)
      ],
      exclude: [
        path.resolve(__dirname, "../node_modules")
      ],
      loader: 'vue-loader',
      options: {
        loaders: {
          css: ExtractTextPlugin.extract({
            loader: 'css-loader',
            fallbackLoader: 'vue-style-loader'
          })
        }
      }
    }]
  }

};
module.exports = baseConfig;