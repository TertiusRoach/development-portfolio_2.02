const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './source/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
  output: {
    filename: 'abes-rmmg.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    // For every HTML file you need to list here.
    new HtmlWebpackPlugin({
      title: 'Ek het nie nou nou gesê los die title blank nie.',
      template: 'source/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    // new CopyPlugin({
    //   patterns: [{ from: 'source/img', to: 'img' }],
    // }),
  ],
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    port: 4000,
  },
};
