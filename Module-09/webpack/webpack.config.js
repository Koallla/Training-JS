const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/js/index.js',
    random: './src/js/random.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].build.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['index'] }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};