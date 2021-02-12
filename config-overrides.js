const path = require('path')

module.exports = function override(config) {
  const newConfig = { ...config }
  newConfig.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@': path.resolve(__dirname, 'src'),
    },
  }

  return newConfig
}
