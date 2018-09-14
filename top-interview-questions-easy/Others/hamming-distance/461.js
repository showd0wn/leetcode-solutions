/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let distance = 0
  let z = x ^ y
  while (z) {
    distance += z & 1
    z >>= 1
  }
  return distance
}
