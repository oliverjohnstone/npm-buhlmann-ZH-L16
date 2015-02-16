var ZhCompartment = require('../../compartments/zurich')

module.exports = function createCompartments(tissueValues) {
  var compartments = []

  tissueValues = tissueValues || []

  tissueValues.forEach(function (tissueValues) {
    var compartment = new ZhCompartment()
    compartment.setTimeConstants(
        tissueValues.heHalftime
      , tissueValues.n2Halftime
      , tissueValues.heCoefficient
      , tissueValues.n2Coefficient
    )
    compartments.push(compartment)
  })

  return compartments
}
