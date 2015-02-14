var zhl17b = require('../../tissues/zh-l17b')
  , assert = require('assert')
  , objectKeyTests = require('./object-keys')

describe('ZH-L17B tissue values', function () {
  it('should export an array of tissue values with length of 17', function () {
    assert(zhl17b instanceof Array, 'should export an array')
    assert(zhl17b.length === 17, 'should have length of 17')
  })

  objectKeyTests(zhl17b)
})
