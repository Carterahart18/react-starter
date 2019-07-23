const webpackMerge = require('webpack-merge');
const webpackConfig = require('../webpack/webpack.config');

module.exports = webpackMerge({}, webpackConfig);
