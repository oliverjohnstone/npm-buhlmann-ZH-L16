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

ZHL16.prototype.addRunTime = function (time, depth) {
  if (!this.activeGas) throw new Error('No gas selected')
  this.compartments.forEach(function (compartment) {
    compartment.onGasForDepthTime(this.activeGas.getPPN2(depth), this.activeGas.getPPHe(depth), time)
  }.bind(this))
}
