const config = {
  presets: ['@babel/env', '@babel/react', '@babel/typescript'],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    'emotion'
  ]
};

module.exports = config;
