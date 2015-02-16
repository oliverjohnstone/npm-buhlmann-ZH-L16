// Calculate the new partial pressure for a given gas and time
module.exports = function getPatialPressureForTime (startPP, newPP, kConst, time) {
  return startPP + ((newPP - startPP) * (1 - Math.exp((kConst * -1) * time)))
}
