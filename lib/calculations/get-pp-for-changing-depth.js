module.exports = function (startPP, newPP, rate, timeConst, duration) {
  return newPP + rate * (duration - (1 / timeConst)) -
    (newPP - startPP - (rate / timeConst)) *
    Math.exp(-timeConst * duration)
}
