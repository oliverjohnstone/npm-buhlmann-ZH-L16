var createCompartments = require('../../../algorithms/lib/create-compartments')
  , assert = require('assert')
  , fixture =
    [ { heHalftime: 1
      , n2Halftime: 1
      , heCoefficient: { a: 1, b: 1 }
      , n2Coefficient: { a: 1, b: 1 }
      }
    ]

describe('createCompartments', function () {
  it('should export a function', function () {
    assert(typeof createCompartments === 'function', 'should export a function')
  })

  it('should return an empty array if no tissue codes are passed', function () {
    assert(createCompartments().length === 0, 'should return an empty array')
  })

  it('should return as many compartments as tissue codes are provided', function () {
    assert(createCompartments(fixture).length === 1, 'length should equal 1')
  })

  it('should return an array of objects', function () {
    var results = createCompartments(fixture)
    results.forEach(function (compartment) {
      assert(typeof compartment === 'object', 'compartment should be of type object')
    })
  })
})
