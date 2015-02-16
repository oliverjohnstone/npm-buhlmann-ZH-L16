var defaultOptions = { algorithm: 'zhl16a' }
  , extend = require('lodash.assign')
  , ZHL16 = require('./algorithms/zh-l16')
  , tissueValues =
    { zhl16a: require('./tissues/zh-l16a')
    , zhl16b: require('./tissues/zh-l16b')
    , zhl17b: require('./tissues/zh-l17b')
    }

module.exports = Dive

function Dive (options) {
  options = extend(defaultOptions, options)

  if (typeof tissueValues[options.algorithm] === 'undefined') {
    throw new Error('Invalid algorithm selected')
  }

  this.zhl16 = new ZHL16(tissueValues[options.algorithm])
}
