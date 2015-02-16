module.exports = function adjustedCoefficient(ppN2, ppHe) {
  var pressureHeN2 = ppN2 + ppHe

  return function calculate(coefficientA, coefficientB) {
    return (( coefficientA * ppN2 ) + ( coefficientB * ppHe)) / pressureHeN2
  }
}
