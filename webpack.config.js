const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const pageName = 'index';

module.exports = {
  entry: `./source/front-end/pages/${pageName}/${pageName}.tsx`, // Update entry point to .tsx file
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Update regex to handle both .ts and .tsx
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
    filename: `source/front-end/pages/${pageName}/${pageName}.js`,
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Index Page',
      template: `source/front-end/pages/${pageName}/index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    port: 4000,
  },
};
