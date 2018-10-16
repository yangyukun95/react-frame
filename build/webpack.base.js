const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = require('./config');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        include: config.srcPath,
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: 'images/[name].[ext]',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          limit: 1,
          name: 'asset/[name].[ext]',
        },
      },
    ],
  },

  resolve: {
    modules: [
      config.srcPath,
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
    alias: {
      Config: path.resolve(__dirname, '../src/config'),
      Store: path.resolve(__dirname, '../src/store'),
      Api: path.resolve(__dirname, '../src/api'),
      Tools: path.resolve(__dirname, '../src/tools'),
      Model: path.resolve(__dirname, '../src/model'),
      '@': path.resolve(__dirname, '../src/components'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: config.templatePath,
    }),
  ],
};
