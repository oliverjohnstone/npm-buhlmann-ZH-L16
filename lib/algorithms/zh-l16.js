var createCompartments = require('./lib/create-compartments')

module.exports = ZHL16

function ZHL16(tissueValues) {
  this.activeGas = false
  this.setupTissueCompartments(tissueValues)
}

ZHL16.prototype.setupTissueCompartments = function (tissueValues) {
  this.compartments = createCompartments(tissueValues)
}

ZHL16.prototype.setActiveGas = function (gas) {
  this.activeGas = gas
}

// Find the shallowest depth you can safely ascend to
ZHL16.prototype.findAscentDepth = function (gradientFactor) {
  var shallowestDepth = 0

  this.compartments.forEach(function (compartment) {
    var depth = compartment.calculateMinimumDepth(gradientFactor)
    if (depth > shallowestDepth) shallowestDepth = depth
  })

  return shallowestDepth - 10
}

// On gas for a set time and depth
ZHL16.prototype.onGasForDepthTime = function (depth, time) {
  if (!this.activeGas) throw new Error('No gas selected')

  var n2 = this.activeGas.getPPN2(depth)
    , he = this.activeGas.getPPHe(depth)

  this.compartments.forEach(function (compartment) {
    compartment.onGasForDepthTime(n2, he, time)
  })
}

// On/Off gas for a set start depth, end depth and rate of change
ZHL16.prototype.changeDepth = function (startDepth, endDepth, rate) {
  if (!this.activeGas) throw new Error('No gas selected')

  var ascentTime = (endDepth - startDepth) / rate
    , n2 = this.activeGas.getPPN2(startDepth)
    , he = this.activeGas.getPPHe(startDepth)
    // TODO: this.activeGas.n2/he should be replaced with getGasFraction
    , n2Rate = rate * this.activeGas.n2
    , heRate = rate * this.activeGas.he

  this.compartments.forEach(function (compartment) {
    compartment.changeDepth(n2, he, n2Rate, heRate, ascentTime)
  })

}
