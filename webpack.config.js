'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './src/nodemyadmin.js',

  output: {
    path: './dist/',
    filename: 'nodemyadmin.min.js'
  },

  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],

  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.(jpg|jpeg|png|gif|svg)$/i,
      loader: 'file'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file"
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }]
  }
};

module.exports = config;
