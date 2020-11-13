const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

module.exports = (env) => {
  switch (env) {
    case 'production':
      return merge(baseConfig, prodConfig);
    case 'development':
      return merge(baseConfig, devConfig);
    default:
      throw new Error('no matching configuration was found!');
  }
}