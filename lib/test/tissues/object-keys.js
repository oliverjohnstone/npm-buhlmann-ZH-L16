var assert = require('assert')

module.exports = function testObjectKeys(object) {
  it('should have an array of objects with helium half-time', function () {
      object.forEach(function (compartment) {
        assert(typeof compartment.heHalftime !== 'undefined', 'should have helium half-time')
      })
    })

  it('should have an array of objects with nitrogen half-time', function () {
    object.forEach(function (compartment) {
      assert(typeof compartment.n2Halftime !== 'undefined', 'should have nitrogen half-time')
    })
  })

  it('should have an array of objects with helium coefficients', function () {
    object.forEach(function (compartment) {
      assert(typeof compartment.heCoefficient !== 'undefined', 'should have helium coefficients')
      assert(typeof compartment.heCoefficient.a !== 'undefined', 'should have helium coefficient A')
      assert(typeof compartment.heCoefficient.b !== 'undefined', 'should have helium coefficient B')
    })
  })

  it('should have an array of objects with nitrogen coefficients', function () {
    object.forEach(function (compartment) {
      assert(typeof compartment.n2Coefficient !== 'undefined', 'should have nitrogen coefficients')
      assert(typeof compartment.n2Coefficient.a !== 'undefined', 'should have nitrogen coefficient A')
      assert(typeof compartment.n2Coefficient.b !== 'undefined', 'should have nitrogen coefficient B')
    })
  })

  it('should have an array of objects with m-values', function () {
    object.forEach(function (compartment) {
      assert(typeof compartment.mVal !== 'undefined', 'should have maximum tissue pressure')
    })
  })
}
