var Zurich = require('../../compartments/zurich')
  , assert = require('assert')

describe('ZurichCompartment', function () {
  it('should export a function', function () {
    assert(typeof Zurich === 'function', 'should export function')
  })

  it('should have a setTimeConstants function', function () {
    var zurich = new Zurich()
    assert(typeof zurich.setTimeConstants === 'function', 'should have setTimeConstants function')
  })

  it('should set the time constants specified', function () {
    var zurich = new Zurich()
    zurich.setTimeConstants(1, 2, { a: 3, b: 4 }, { a: 5, b: 6 })
    assert(zurich.heCoefficientA === 3, 'should set heCoefficientA')
    assert(zurich.heCoefficientB === 4, 'should set heCoefficientB')
    assert(zurich.n2CoefficientA === 5, 'should set n2CoefficientA')
    assert(zurich.n2CoefficientB === 6, 'should set n2CoefficientB')
  })
})
