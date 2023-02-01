const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StampWebpackPlugin = require('./plugins/stamp.webpack.plugin');

 /** * 
  * @type {import('webpack').Configuration} 
  * 
 */ 

module.exports = {
  mode: 'development',
  entry: {
    index: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&noInfo=true&reload=true',
      path.resolve(__dirname, 'src/index.js'),
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'custom webpack plugin and hot replement',
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new StampWebpackPlugin(),
  ]
}