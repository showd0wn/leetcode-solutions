/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let start = 1
  let end = Math.floor(x / 2)
  if (x === 0 || x === 1) return x
  while (start <= end) {
    if (end ** 2 <= x) {
      return end
    } else {
      end -= 1
    }
    if ((start + 1) ** 2 <= x) {
      start += 1
    } else {
      return start
    }
  }
}
