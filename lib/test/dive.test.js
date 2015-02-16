var rewire = require('rewire')
  , Dive = rewire('../dive')
  , assert = require('assert')

describe('Dive', function () {
  it('should export a function', function () {
    assert(typeof Dive === 'function', 'should export a function')
  })

  it('should extend the default options when none are provided', function () {
    var dive = new Dive()
    assert.equal(dive.options.algorithm, 'zhl16a')
  })

  it('should override default options with options provided in constructor', function () {
    var dive = new Dive({ algorithm: 'zhl16b' })
    assert.equal(dive.options.algorithm, 'zhl16b')
  })

  it('should throw an exception when an invalid dive algorithm has been chosen', function () {
    assert.throws(function () {
      var dive = new Dive({ algorithm: 'invalid' })
      dive.noop()
    })
  })

  it('should setup the zhl16 algorithm with the correct tissue values', function (done) {
    var dive = null
      , tissues = { zhl16a: [ { a: 1, b: 2, c: 3 } ] }

    Dive.__set__(
      { tissueValues: tissues
      , ZHL16: function (tissueValues) {
          assert.equal(tissueValues, tissues.zhl16a)
          done()
        }
      }
    )

    dive = new Dive({ algorithm: 'zhl16a' })

  })
})
