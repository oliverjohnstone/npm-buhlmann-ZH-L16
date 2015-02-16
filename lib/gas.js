var waterVapourPressure = 0.627

module.exports = Gas

function Gas(o2, he) {
  if (o2 + he > 100) throw new Error('Gas mix cannot exceed 100%')

  this.o2 = o2 / 100
  this.he = he / 100
  this.n2 = (100 - (o2 + he)) / 100
}

// Calculate the partial pressure for a gas percentage
function getPPForGas(depth, gasPc) {
  return (depth + (10 - waterVapourPressure)) * gasPc
}

Gas.prototype.getPPN2 = function (depth) {
  return getPPForGas(depth, this.n2)
}

Gas.prototype.getPPO2 = function (depth) {
  return getPPForGas(depth, this.o2)
}

Gas.prototype.getPPHe = function (depth) {
  return getPPForGas(depth, this.he)
}

// Get equivalent narcotic depth
Gas.prototype.getEND = function () {

}

// Get maximum operating depth based on set point
Gas.prototype.getMOD = function (/*setPoint*/) {

}
