var waterVapourPressure = 0.627

module.exports = function getPPN2AtPressue(n2PC, pressure) {
  return n2PC * (pressure - waterVapourPressure)
}
