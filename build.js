const webpack = require('webpack');
const defaultConfig = require('./webpack.config.default');
const optimisedConfig = require('./webpack.config.optimised');

webpack([
  defaultConfig,
  optimisedConfig,
]).run((err, stats) => {
  if (err) {
    throw err;
  }
  const saved = stats.toJson().children[0].assets[0].size - stats.toJson().children[1].assets[0].size;
  console.log(`You saved ${Math.round(saved / 1024)}KB`);
});
