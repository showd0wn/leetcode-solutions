/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var limit =  Math.pow(2, 31)
  if (x > limit) return 0
  var bool = x > 0
  var array = String(Math.abs(x)).split('').reverse()
  var number = Number(array.join(''))
  if (number > limit) return 0
  return bool ? number : 0 - number
}
