var zhl16b = require('../../tissues/zh-l16b')
  , assert = require('assert')
  , objectKeyTests = require('./object-keys')

describe('ZH-L16B tissue values', function () {
  it('should export an array of tissue values with length of 16', function () {
    assert(zhl16b instanceof Array, 'should export an array')
    assert(zhl16b.length === 16, 'should have length of 16')
  })

  objectKeyTests(zhl16b)
})
