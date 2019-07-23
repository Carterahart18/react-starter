const path = require('path');

const BASE_PATH = path.resolve(__dirname, '..');

const config = {
  devtool: 'inline-source-map',
  entry: `${BASE_PATH}/src/index.tsx`,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: `${BASE_PATH}/dist`
  },
  resolve: {
    alias: {
      src: `${BASE_PATH}/src`
    },
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    modules: ['node_modules']
  }
};

module.exports = config;
