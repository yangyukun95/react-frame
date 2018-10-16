const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const baseConfig = require('./webpack.base');
const path = require('path');
const config = require('./config');


module.exports = Object.assign({}, baseConfig, {
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, '../src/vendor.js'),
    path.resolve(__dirname, '../src/index.jsx'),
  ],
  output: {
    path: config.distPath,
    publicPath: '/',
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      ...baseConfig.module.rules,
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              module: true,
              camelCase: true,
              localIdentName: '[name]__[local]-[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },

      {
        test: /\.css$/,
        exclude: [/src/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              camelCase: true,
            },
          },
        ],
      },
    ],
  },

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: config.buildPath,
    historyApiFallback: true,
    host: '127.0.0.1',
    port: '8000',
    inline: true,
    stats: {
      warnings: true,
      reasons: true,
      errors: true,
      errorDetails: true,
      colors: true,
    },
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.NamedModulesPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),

    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
    }),

    ...baseConfig.plugins,
  ],
});
