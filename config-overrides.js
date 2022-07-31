const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
      '@redux': path.resolve(__dirname, 'src/redux')
    },
  };

  return config;
};