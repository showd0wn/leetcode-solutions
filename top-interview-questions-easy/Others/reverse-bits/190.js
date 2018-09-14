/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let answer = 0
  for (let i = 0; i < 32; i += 1) {
    answer <<= 1
    answer |= n & 1
    n >>= 1
  }
  return answer >>> 0
}
