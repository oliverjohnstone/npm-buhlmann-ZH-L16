var calculateAdjustedCoefficient = require('../../calculations/calculate-adjusted-coefficient')
  , assert = require('assert')

describe('calculateAdjustedCoefficient', function () {
  it('should export a function', function () {
    assert(typeof calculateAdjustedCoefficient === 'function', 'it should export a function')
  })

  it('should return a function', function () {
    var fn = calculateAdjustedCoefficient(1, 2)
    assert(typeof fn === 'function', 'it should return a function')
  })

  it('should return a function which should return a number', function () {
    var fn = calculateAdjustedCoefficient(1, 2)
    assert(typeof fn(1, 2) === 'number', 'should return a number')
  })

  it('should calculate an adjusted value using the values passed', function () {
    var fn = calculateAdjustedCoefficient(1, 2)

    assert.equal(fn(1, 2).toFixed(5), '1.66667')
    assert.equal(fn(5, 10).toFixed(5), '8.33333')
    assert.equal(fn(16, 12).toFixed(5), '13.33333')
    assert.equal(fn(1.02, 5.7).toFixed(5), '4.14000')
    assert.equal(fn(7.780, 2.466).toFixed(5), '4.23733')
  })
})
