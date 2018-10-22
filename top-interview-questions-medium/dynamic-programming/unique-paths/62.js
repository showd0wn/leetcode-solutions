/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//   if (m === 1 || n === 1) return 1
//   return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
// }

var uniquePaths = function(m, n) {
  if (m === 1 || n === 1) return 1

  const arr = []

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[j] = (arr[j] || 1 ) + (arr[j - 1] || 1)
    }
  }
  return arr[n - 1]
}
