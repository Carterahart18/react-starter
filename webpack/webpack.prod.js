/* eslint-env node */

const path = require('path');

const BASE_PATH = path.resolve(__dirname, '..');

module.exports = () => {
  return {
    mode: 'development',
    devServer: {
      contentBase: path.join(BASE_PATH, 'dist'),
      compress: true,
      port: 9005,
      overlay: true
    }
  };
};
