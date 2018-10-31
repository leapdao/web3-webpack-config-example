const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index-default.js',
  }
};
