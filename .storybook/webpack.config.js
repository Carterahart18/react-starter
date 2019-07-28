/* eslint-env node */

const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackConfig = require('../webpack/webpack.config');

const BASE_PATH = path.resolve(__dirname, '..');

module.exports = webpackMerge(
  {
    resolve: {
      alias: {
        src: `${BASE_PATH}/src`,
        stories: `${BASE_PATH}/stories`
      }
    }
  },
  webpackConfig
);
