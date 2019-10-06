const path = require('path');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const loadModeConfig = env => require(`./build-utils/${env.mode}.config`)(env);

//./src/index.js
module.exports = env =>
  webpackMerge(
    {
      mode: env.mode,
      context: path.resolve(__dirname, 'src'),
      entry: './index.js',
      // {
      //   contact: './src/contact.js',
      //   about: './src/about.js',
      // },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_module/,
            use: ['babel-loader'],
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[path]/[name].[ext]',
                  limit: 8192,
                },
              },
            ],
          },
          { test: /\.hbs$/, loader: 'handlebars-loader' },
          {
            test: /\.html$/,
            use: 'html-loader',
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar(),
      ],
    },
    loadModeConfig(env),
  );
