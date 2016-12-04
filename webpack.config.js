'use strict';

var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    "vendor": "./src/vendor",
    "app": "./src/app"
  },
  output: {
    path: './dist/',
    filename: "[name].bundle.min.js"
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [{
      test: /\.ts/,
      loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
      exclude: /node_modules/
    }, {
      test: /\.(jpg|jpeg|png|gif|svg)$/i,
      loader: 'file'
    }, {
      test: /\.(html)$/i,
      loader: 'raw?name=[name].[ext]',
      include: [
        path.resolve(__dirname, 'src', 'app')
      ]
    }, {
      test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file"
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./vendor.bundle.min.js"),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
