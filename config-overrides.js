const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@hooks': path.resolve(__dirname, 'src/hooks')
    },
  };

  return config;
};