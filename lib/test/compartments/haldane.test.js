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
    assert(haldane.heHalftime === 2, 'should have helium half-time')
    assert(haldane.n2Halftime === 1, 'should have nitrogen half-time')
    assert(haldane.kHe === Math.log(2) / 2, 'should set correct time constant for helium')
    assert(haldane.kN2 === Math.log(2) / 1, 'should set correct time constants for nitrogen')
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

  it('should have a setMNaught function', function() {
    var haldane = new Haldane()
    assert(typeof haldane.setMNaught === 'function', 'should have setMNaught function')
  })

  it('should set the specified M Naught value', function () {
    var haldane = new Haldane()
    haldane.setMNaught(10)
    assert(haldane.mNaught === 10, 'should set correct M Naught value')
  })

  it('should have a function called onGasForDepthTime', function () {
    var haldane = new Haldane()
    assert(typeof haldane.onGasForDepthTime === 'function', 'should have onGasForDepthTime function')
  })

  it('should update the ppN2 and ppHe values when onGasForDepthTime is called', function () {
    var haldane = new Haldane()

    haldane.setTimeConstants(2, 3)

    var previousPPN2 = haldane.ppN2
      , previousPPHe = haldane.ppHe

    haldane.onGasForDepthTime(2, 4, 50)

    assert.notEqual(previousPPHe, haldane.ppHe)
    assert.notEqual(previousPPN2, haldane.ppN2)

  })

  it('should have a changeDepth function', function () {
    var haldane = new Haldane()
    assert(typeof haldane.changeDepth === 'function', 'should have a changeDepth function')
  })

  it('should update the ppN2 and ppHe values when changeDepth is called', function () {
    var haldane = new Haldane()

    haldane.setTimeConstants(2, 3)

    var previousPPN2 = haldane.ppN2
      , previousPPHe = haldane.ppHe

    haldane.changeDepth(1, 2, 10, 10, 10)

    assert.notEqual(previousPPHe, haldane.ppHe)
    assert.notEqual(previousPPN2, haldane.ppN2)

  })
})
