const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index-optimized.js',
  },
  plugins: [
    new webpack.IgnorePlugin(/web3-providers-(ipc|ws)/),
  ],
  resolve: {
    alias: {
      'bn.js': require.resolve('bn.js'),
      'web3-eth-ens': require.resolve('./dummies/web3-eth-ens.js'),
    },
  },
};
