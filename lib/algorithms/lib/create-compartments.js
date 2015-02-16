var ZhCompartment = require('../../compartments/zurich')

module.exports = function createCompartments(tissueValues) {
  var compartments = []

  tissueValues = tissueValues || []

  tissueValues.forEach(function (tissueValues) {
    var compartment = new ZhCompartment()
    compartment.setTimeConstants(
        tissueValues.n2Halftime
      , tissueValues.heHalftime
      , tissueValues.n2Coefficient
      , tissueValues.heCoefficient
    )
    compartment.setMNaught(tissueValues.mVal)
    compartments.push(compartment)
  })

  return compartments
}
