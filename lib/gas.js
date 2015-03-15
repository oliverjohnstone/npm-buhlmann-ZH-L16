var waterVapourPressure = 0.627

module.exports = Gas

function Gas(o2, he, fixedPPO2) {
  if (o2 + he > 100) throw new Error('Gas mix cannot exceed 100%')

  this.o2 = o2 / 100
  this.he = he / 100
  this.n2 = (100 - (o2 + he)) / 100
  this.fixedPPO2 = fixedPPO2 * 10
}

Gas.prototype.setFixedPPO2 = function (fixedPPO2) {
  this.fixedPPO2 = fixedPPO2
}

// Calculate the partial pressure for a gas percentage
Gas.prototype.getPPForGas = function (depth, gasPc) {
  return this.getAmbPressure(depth) * gasPc
}

Gas.prototype.getAmbPressure = function (depth) {
  return depth + (10 - waterVapourPressure)
}

Gas.prototype.getPPN2 = function (depth) {
  if (this.fixedPPO2) {
    var remainingGas = this.getAmbPressure(depth)
    remainingGas -= remainingGas * this.he
    return remainingGas - this.fixedPPO2 < 0 ? 0 : remainingGas - this.fixedPPO2
  } else {
    return this.getPPForGas(depth, this.n2)
  }
}

Gas.prototype.getPPO2 = function (depth) {
  var ambPressure = this.getAmbPressure(depth)
  if (this.fixedPPO2) return this.fixedPPO2 > ambPressure ? ambPressure : this.fixedPPO2
  return this.getPPForGas(depth, this.o2)
}

Gas.prototype.getPPHe = function (depth) {
  if (this.fixedPPO2) {
    var remainingGas = this.getAmbPressure(depth)
    remainingGas -= this.getPPN2(depth)
    return remainingGas - this.fixedPPO2 < 0 ? 0 : remainingGas - this.fixedPPO2
  } else {
    return this.getPPForGas(depth, this.he)
  }
}

// Get equivalent narcotic depth
Gas.prototype.getEND = function (depth) {
  return +((depth + 10) * (1 - this.he) - 10).toFixed(2)
}

// Get maximum operating depth based on set point
Gas.prototype.getMOD = function (setPoint) {
  return +(10 * ((setPoint / this.o2) - 1)).toFixed(2)
}
