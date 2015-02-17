var ZHL16 = require('./lib/algorithms/zh-l16')
  , tissueValues =
    { zhl16a: require('./lib/tissues/zh-l16a')
    , zhl16b: require('./lib/tissues/zh-l16b')
    , zhl17b: require('./lib/tissues/zh-l17b')
    }

module.exports =
  { ZHL16A: ZHL16.bind(null, tissueValues.zhl16a)
  , ZHL16B: ZHL16.bind(null, tissueValues.zhl16b)
  , ZHL17B: ZHL16.bind(null, tissueValues.zhl17b)
  }
