const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base');
const config = require('./config');
const path = require('path');

module.exports = Object.assign({}, baseConfig, {
  entry: {
    vendor: path.resolve(__dirname, '../src/vendor.js'),
    app: path.resolve(__dirname, '../src/index.jsx'),
  },

  output: {
    path: config.distPath,
    publicPath: '/',
    filename: '[name].bundle.[chunkhash:8].js',
  },

  module: {
    rules: [
      ...baseConfig.module.rules,
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?minimize&sourceMap&importLoaders=1&module&camelCase&localIdentName=[hash:base64:5]',
            'postcss-loader',
          ],
          publicPath: '../',
        }),
      },
      {
        test: /\.css$/,
        exclude: [/src/],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?minimize&sourceMap&importLoaders=1&camelCase&localIdentName=[hash:base64:5]',
            'postcss-loader',
          ],
          publicPath: '../',
        }),
      },
    ],
  },

  plugins: [
    ...baseConfig.plugins,

    new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '../') }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {},
      sourceMap: false,
    }),

    new ExtractTextPlugin('css/app.[hash:8].css'),


    new CommonsChunkPlugin({ name: 'vendor' }),
  ],
});
