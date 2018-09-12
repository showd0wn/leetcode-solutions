/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   if (n === 0 || n === 1 || n === 2) return n
//   return climbStairs(n - 1) + climbStairs(n - 2)
// }

var climbStairs = function(n) {
  var array = []
  array[1] = 1
  array[2] = 2
  for (var i = 3; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2]
  }
  return array[n]
}
