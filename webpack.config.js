'use strict';

var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var product = require('./package.json');

var banner = product.name + " v" + product.version;
banner += "\nDeveloped & maintained by " + product.author + " and contributors.";
banner += "\nMIT Licensed";

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
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./vendor.bundle.min.js"),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

		new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin(),

    new webpack.BannerPlugin(banner)
  ]
}
