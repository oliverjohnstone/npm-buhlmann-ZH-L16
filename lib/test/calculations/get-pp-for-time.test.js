var getPPForTime = require('../../calculations/get-pp-for-time')
  , assert = require('assert')

describe('getPPForTime', function () {
  it('should export a function', function () {
    assert(typeof getPPForTime === 'function', 'should export a function')
  })

  it('should return a number', function () {
    assert(typeof getPPForTime(1, 1, 1, 52) === 'number', 'should return a number')
  })

  it('should return the expected value', function () {
    var result = getPPForTime(1, 2, 0.23104906018664842, 50)
    assert.equal(result, 1.9999903875652323)
  })
})
