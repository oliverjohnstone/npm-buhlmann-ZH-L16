var HaldaneCompartment = require('./haldane')
  , calculateAdjustedCoefficient = require('../calculations/calculate-adjusted-coefficient')
  , ZHCompartment = function () {}

ZHCompartment.prototype = new HaldaneCompartment()

module.exports = ZHCompartment

ZHCompartment.prototype.setTimeConstants = function (n2Halftime, heHalftime, n2Coefficient, heCoefficient) {
  HaldaneCompartment.prototype.setTimeConstants.call(this, n2Halftime, heHalftime)
  this.heCoefficientA = heCoefficient.a
  this.heCoefficientB = heCoefficient.b
  this.n2CoefficientA = n2Coefficient.a
  this.n2CoefficientB = n2Coefficient.b
}

ZHCompartment.prototype.calculateMinimumDepth = function (gradientFactor) {
  var pressureHeN2 = this.ppN2 + this.ppHe
    , calculateAdjustedFn = calculateAdjustedCoefficient(this.ppN2, this.ppHe)
    , a = calculateAdjustedFn(this.n2CoefficientA, this.heCoefficientA)
    , b = calculateAdjustedFn(this.n2CoefficientB, this.heCoefficientB)

  return (pressureHeN2 - a * gradientFactor) / (gradientFactor / b - gradientFactor + 1)
}
