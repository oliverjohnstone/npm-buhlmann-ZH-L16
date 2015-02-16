var getPPN2 = require('../calculations/get-ppn2-at-pressure')
  , calculatePPForTime = require('../calculations/get-pp-for-time')
  , calculatePPForChangingDepth = require('../calculations/get-pp-for-changing-depth')

module.exports = HaldaneCompartment

function HaldaneCompartment() {
  this.setPartialPressure(getPPN2(0.79, 10), 0)
  this.kHe = 0
  this.kN2 = 0
}

HaldaneCompartment.prototype.setTimeConstants = function (heHalftime, n2Halftime) {
  var ln2 = Math.log(2)

  // Set time constants for helium and nitrogen
  this.kHe = ln2 / heHalftime
  this.kN2 = ln2 / n2Halftime

  this.heHalftime = heHalftime
  this.n2Halftime = n2Halftime
}

HaldaneCompartment.prototype.setPartialPressure = function (n2, he) {
  this.ppN2 = n2
  this.ppHe = he
}

HaldaneCompartment.prototype.setMNaught = function (mNaught) {
  this.mNaught = mNaught
}

// Increase on gassing of this compartment at a constant depth with specified nitrogen
// and helium partial pressures
HaldaneCompartment.prototype.onGasForDepthTime = function (ppN2, ppHe, duration) {
  this.ppN2 = calculatePPForTime(this.ppN2, ppN2, this.kN2, duration)
  this.ppHe = calculatePPForTime(this.ppHe, ppHe, this.kHe, duration)
}

// On/Off gas from one depth to another using helium and nitrogen partial pressures,
// rates and duration
HaldaneCompartment.prototype.changeDepth = function (ppN2, ppHe, n2Rate, heRate, duration) {
  this.ppHe = calculatePPForChangingDepth(this.ppHe, ppHe, heRate, this.KHe, duration)
  this.ppN2 = calculatePPForChangingDepth(this.ppN2, ppN2, n2Rate, this.kN2, duration)
}
