var Gas = require('../gas')
  , assert = require('assert')

describe('Gas', function () {
  it('should export a function', function () {
    assert(typeof Gas === 'function', 'should export a function')
  })

  it('should thrown an exception if o2 & He exceed 100%', function () {
    assert.throws(function () {
      var gas = new Gas(50, 51)
      gas.noop()
    })
  })

  it('should calculate the nitrogen in the mix from the o2 & He', function () {
    var gas = new Gas(20, 20)
    assert.equal(gas.n2, 0.6)
  })

  it('should set the variable for O2, He & N2', function () {
    var gas = new Gas(18, 20)
    assert.equal(gas.o2, 0.18)
    assert.equal(gas.he, 0.20)
    assert.equal(gas.n2, 0.62)
  })

  it('should have a getPPN2 function', function () {
    var gas = new Gas(20, 20)
    assert(typeof gas.getPPN2 === 'function', 'should have function')
  })

  it('should have a getPPO2 function', function () {
    var gas = new Gas(20, 20)
    assert(typeof gas.getPPO2 === 'function', 'should have function')
  })

  it('should have a getPPHe function', function () {
    var gas = new Gas(20, 20)
    assert(typeof gas.getPPHe === 'function', 'should have function')
  })

  it('should return a number when any of the getPP~ functions are called', function () {
    var gas = new Gas(20, 20)
    assert(typeof gas.getPPHe() === 'number', 'should return number')
    assert(typeof gas.getPPO2() === 'number', 'should return number')
    assert(typeof gas.getPPN2() === 'number', 'should return number')
  })

  it('should return the correct PPO2 for a given depth', function () {
    var gas = new Gas(100, 0)
    assert.equal(gas.getPPO2(10), 19.372999999999998)
  })

  it('should return the correct PPN2 for a given depth', function () {

  })

  it('should return the correct PPHe for a given depth', function () {

  })

  it('should have a getEND function', function () {

  })

  it('should return the correct END', function () {

  })

  it('should have a getMOD function', function () {

  })

  it('should return the correct MOD', function () {

  })
})
