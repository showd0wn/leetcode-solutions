/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let answer = 0
  while (n) {
    answer += n & 1
    n = n >>> 1
  }
  return answer
}
