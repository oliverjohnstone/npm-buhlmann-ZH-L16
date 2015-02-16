var createCompartments = require('./lib/create-compartments')

module.exports = ZHL16

function ZHL16(tissueValues) {
  this.setupTissueCompartments(tissueValues)
}

ZHL16.prototype.setupTissueCompartments = function (tissueValues) {
  this.compartments = createCompartments(tissueValues)
}
