/* eslint-env node */

const path = require('path');
const webpackMerge = require('webpack-merge');

const BASE_PATH = path.resolve(__dirname, '..');

const getModeConfig = env => require(`./webpack.${env.mode}`)(env);

module.exports = (env = { mode: 'prod' }) => {
  return webpackMerge(
    {
      devtool: 'inline-source-map',
      entry: `${BASE_PATH}/src/index.tsx`,
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx|tsx|ts)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.(png|jpe?g)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8000,
                  name: 'images/[name].[hash].[ext]'
                }
              }
            ]
          },
          {
            test: /\.svg$/,
            loader: 'svg-react-loader'
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
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
        extensions: [
          '*',
          '.js',
          '.jsx',
          '.tsx',
          '.ts',
          '.svg',
          '.png',
          '.jpg',
          '.jpeg'
        ],
        modules: ['node_modules']
      }
    },
    getModeConfig(env)
  );
};
