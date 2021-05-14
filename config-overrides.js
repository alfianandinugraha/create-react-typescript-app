const { aliasJest, configPaths, alias } = require('react-app-rewire-alias')

const aliasMap = configPaths('./tsconfig.base.json')

module.exports = function override(config, env) {
  const newConfig = alias(aliasMap)(config, env)
  newConfig.output.publicPath = './'
  return newConfig
}
module.exports.jest = aliasJest(aliasMap)
