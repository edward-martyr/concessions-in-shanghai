const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  output: {
    clean: true,
    publicPath: 'auto',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
      {
        test: /\.(bib)$/,
        exclude: /node_modules/,
        type: 'asset/source',
      },
    ],
  },
  optimization: {
    chunkIds: 'size',
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      favicon: './src/海.png',
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/robots.txt', to: 'robots.txt' },
      ],
    }),
    new CompressionPlugin(),
    new ESLintPlugin(),
  ],
};
