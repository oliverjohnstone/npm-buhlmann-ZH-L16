var rewire = require('rewire')
  , ZHL16 = rewire('../../algorithms/zh-l16')
  , Gas = require('../../gas')
  , assert = require('assert')
  , fixture =
    [ { heHalftime: 1.5
      , n2Halftime: 4.0
      , heCoefficient: { a: 17.435, b: 0.1911 }
      , n2Coefficient: { a: 12.599, b: 0.505 }
      , mVal: 32.4
      }
    , { heHalftime: 1.5
      , n2Halftime: 4.0
      , heCoefficient: { a: 17.435, b: 0.1911 }
      , n2Coefficient: { a: 12.599, b: 0.505 }
      , mVal: 32.4
      }
    ]

describe('ZH-L16', function () {
  it('should export a function', function () {
    assert(typeof ZHL16 === 'function', 'should export a function')
  })

  it('should setup a list of compartments given a set of tissue values', function () {
    var zhl16 = new ZHL16(fixture)
    assert(zhl16.compartments instanceof Array, 'should create array of compartments')
    assert.equal(zhl16.compartments.length, 2)
  })

  it('should compartments comprised of objects', function () {
    var zhl16 = new ZHL16(fixture)
    zhl16.compartments.forEach(function (compartment) {
      assert(typeof compartment === 'object', 'should comprise of objects')
    })
  })

  it('should set the active gas to false by default', function () {
    var zhl16 = new ZHL16(fixture)
    assert.equal(zhl16.activeGas, false)
  })

  it('should have a setupTissueCompartments function', function () {
    var zhl16 = new ZHL16(fixture)
    assert(typeof zhl16.setupTissueCompartments === 'function', 'should have function')
  })

  it('should have a setActiveGas function', function () {
    var zhl16 = new ZHL16(fixture)
    assert(typeof zhl16.setActiveGas === 'function', 'should have function')
  })

  it('should set the correct active gas', function () {
    var zhl16 = new ZHL16(fixture)
      , gas = new Gas(20, 20)

    zhl16.setActiveGas(gas)
    assert.equal(zhl16.activeGas, gas)
  })

  it('should have a addRunTime function', function () {
    var zhl16 = new ZHL16(fixture)
    assert(typeof zhl16.addRunTime === 'function', 'should have function')
  })

  it('should throw an exception if no gas is provided', function () {
    var zhl16 = new ZHL16(fixture)
    assert.throws(function () { zhl16.addRunTime(20, 10) }, 'should throw exception')
  })

  it('should loop through all compartments and call onGasForDepthTime', function (done) {
    function createCompartments() {
      return [
        { onGasForDepthTime: function () {
            assert(true)
            done()
          }
        }
      ]
    }

    ZHL16.__set__(
      { createCompartments: createCompartments
      }
    )

    var zhl16 = new ZHL16(fixture)
    zhl16.setActiveGas(new Gas(20, 20))
    zhl16.addRunTime(10, 10)
  })
})
