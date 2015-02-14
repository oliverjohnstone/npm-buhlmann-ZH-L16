var assert = require('assert')

module.exports = function tableCheckTest(obj, table) {

  it('should contain the same values as specified in the table', function () {
    for (var i = 0; i < table.length; i++) {
      assert(obj[i].n2Halftime === table[i][0], 'nitrogen half-time should === table half-time')
      assert(obj[i].n2Coefficient.a === table[i][1], 'nitrogen coefficient A should === table coefficient')
      assert(obj[i].n2Coefficient.b === table[i][2], 'nitrogen coefficient B should === table coefficient')
      assert(obj[i].heHalftime === table[i][3], 'helium half-time should === table half-time')
      assert(obj[i].heCoefficient.a === table[i][4], 'helium coefficient A should === table coefficient')
      assert(obj[i].heCoefficient.b === table[i][5], 'helium coefficient B should === table coefficient')
    }
  })
}
