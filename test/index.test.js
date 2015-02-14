var assert = require('assert')
  , index = require('../index')

describe('index', function () {
  it('should return an array of functions', function () {
    assert(Object.keys(index).length > 0, 'index should export a non empty object')
    for (var fn in index) {
      assert(typeof index[fn] === 'function', 'each export should be a function')
    }
  })
})
