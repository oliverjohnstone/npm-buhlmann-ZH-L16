var getPPN2 = require('../calculations/get-ppn2-at-pressure')

module.exports = HaldaneCompartment

function HaldaneCompartment() {
  this.setPartialPressure(getPPN2(0.79, 10), 0)
}

HaldaneCompartment.prototype.setTimeConstants = function (heHalftime, n2Halftime) {
  this.heHalftime = heHalftime
  this.n2Halftime = n2Halftime
}

HaldaneCompartment.prototype.setPartialPressure = function (n2, he) {
  this.ppN2 = n2
  this.ppHe = he
}
