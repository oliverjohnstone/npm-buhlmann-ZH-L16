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
})
