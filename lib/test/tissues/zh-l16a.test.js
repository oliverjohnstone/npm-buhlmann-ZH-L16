var zhl16a = require('../../tissues/zh-l16a')
  , objectKeyTests = require('./object-keys')
  , tableTest = require('./table')
  , table = require('./fixtures/table-zh-l16a')
  , assert = require('assert')

describe('ZH-L16A tissue values', function () {
  it('should export an array of tissue values with length of 16', function () {
    assert(zhl16a instanceof Array, 'should export an array')
    assert(zhl16a.length === 16, 'should have length of 16')
  })

  objectKeyTests(zhl16a)
  tableTest(zhl16a, table)

})
