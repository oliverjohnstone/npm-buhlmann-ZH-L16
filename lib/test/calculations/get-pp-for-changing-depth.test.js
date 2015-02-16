var getPPForChangingDepth = require('../../calculations/get-pp-for-changing-depth')
  , assert = require('assert')

describe('getPPForChangingDepth', function () {
  it('should export a function', function () {
    assert(typeof getPPForChangingDepth === 'function', 'should export a function')
  })

  it('should return a number', function () {
    // Time const for compartment 5
    var timeConst = Math.log(2) / 27
      , result = getPPForChangingDepth(0.79, 3.16, 10, timeConst, 10)

    assert(typeof result === 'number', 'should return a number')
  })

  it('should return the correct results', function () {
    // Time const for compartment 5
    var timeConst = Math.log(2) / 27
      , result = getPPForChangingDepth(0.79, 3.16, 10, timeConst, 10)
    assert.equal(result, 13.131262976846529)
  })
})
