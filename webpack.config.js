const path = require('path')

const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isDevServer = !!process.env.WEBPACK_DEV_SERVER;

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  cache: true,
  plugins: [
    new HTMLPlugin({
      title: 'BookStore',
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new Dotenv(),
    ...(!isDevServer ? [new CleanWebpackPlugin()] : []),
  ],
  devServer: {
    static: './dist',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use:{
          loader: 'html-loader'
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
}
