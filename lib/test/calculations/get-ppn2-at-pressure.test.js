var ppn2AtPressure = require('../../calculations/get-ppn2-at-pressure')
  , assert = require('assert')

describe('getPPN2AtPressure', function () {
  it('should export a function', function () {
    assert(typeof ppn2AtPressure === 'function', 'should export a function')
  })

  it('should return a number', function () {
    assert(typeof ppn2AtPressure(0.79, 10) === 'number', 'should return a number')
  })

  it('should return the correct values', function () {
    var surface = '7.40467'
      , ten = '15.30467'
      , twenty = '23.20467'
      , thirty = '31.10467'

    assert(ppn2AtPressure(0.79, 10).toFixed(5) === surface, 'should return correct value')
    assert(ppn2AtPressure(0.79, 20).toFixed(5) === ten, 'should return correct value')
    assert(ppn2AtPressure(0.79, 30).toFixed(5) === twenty, 'should return correct value')
    assert(ppn2AtPressure(0.79, 40).toFixed(5) === thirty, 'should return correct value')
  })
})
