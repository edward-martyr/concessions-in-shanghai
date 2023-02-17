const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext][query]',
            },
          },
        ],
      },
      {
        test: /\.(bib)$/,
        exclude: /node_modules/,
        type: 'asset/source',
      },
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
  ],
};
