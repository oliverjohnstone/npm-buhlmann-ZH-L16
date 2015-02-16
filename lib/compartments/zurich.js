var HaldaneCompartment = require('./haldane')
  , ZHCompartment = function () {}

ZHCompartment.prototype = new HaldaneCompartment()

module.exports = ZHCompartment

ZHCompartment.prototype.setTimeConstants = function (heHalftime, n2Halftime, heCoefficient, n2Coefficient) {
  HaldaneCompartment.prototype.setTimeConstants.call(this, heHalftime, n2Halftime)
  this.heCoefficientA = heCoefficient.a
  this.heCoefficientB = heCoefficient.b
  this.n2CoefficientA = n2Coefficient.a
  this.n2CoefficientB = n2Coefficient.b
}
