var Haldane = require('../../compartments/haldane')
  , assert = require('assert')

describe('HaldaneCompartment', function () {
  it('should export a function', function () {
    assert(typeof Haldane === 'function', 'should export function')
  })

  it('should have a setTimeConstants function', function () {
    var haldane = new Haldane()
    assert(typeof haldane.setTimeConstants === 'function', 'should have setTimeConstants function')
  })

  it('should set the time constants specified', function () {
    var haldane = new Haldane()
    haldane.setTimeConstants(1, 2)
    assert(haldane.heHalftime === 1, 'should have helium half-time')
    assert(haldane.n2Halftime === 2, 'should have nitrogen half-time')
  })

  it('should have a setPartialPressure function', function () {
    var haldane = new Haldane()
    assert(typeof haldane.setPartialPressure === 'function', 'should have a setPartialPressure function')
  })

  it('should set the partial pressure of helium and nitrogen', function () {
    var haldane = new Haldane()
    haldane.setPartialPressure(1, 2)
    assert(haldane.ppN2 === 1, 'should set correct partial pressure of nitrogen')
    assert(haldane.ppHe === 2, 'should set correct partial pressure of helium')
  })

  it('should default to 0 He and 79 N2 when none are provided, i.e the surface air mix', function () {
    var haldane = new Haldane()
    assert(haldane.ppHe === 0, 'helium should default to 0')
    assert(haldane.ppN2.toFixed(5) === '7.40467', 'nitrogen should default to 7.40467')
  })
})
