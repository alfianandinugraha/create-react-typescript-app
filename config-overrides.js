const { aliasJest, configPaths, alias } = require('react-app-rewire-alias')

const aliasMap = configPaths('./tsconfig.base.json')

module.exports = alias(aliasMap)
module.exports.jest = aliasJest(aliasMap)
