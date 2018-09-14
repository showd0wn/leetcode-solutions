/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0
  let flagArray = []
  for (let i = 2; i < n; i++) {
    if (flagArray[i] === undefined) {
      flagArray[i] = 1
      count += 1
      let j = 2
      while(i * j < n) {
        flagArray[i * j] = 0
        j += 1
      }
    }
  }
  return count
}
