/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = []
  const n = nums.length
  if (n < 3) return result
  const snums = nums.sort((a, b) => a - b)
  for (let i = 0; i < n - 2; i++) {
    if (snums[i] > 0) return result
    if (i > 0 && snums[i] === snums[i - 1]) continue
    let a = snums[i]
    let start = i + 1, end = n - 1
    while (start < end) {
      let b = snums[start]
      let c = snums[end]
      if (a + b + c === 0) {
        result.push([a, b, c])
        start++
        end--
        while (start < end && snums[start] === snums[start - 1]) start++
        while (start < end && snums[end] === snums[end + 1]) end--
      } else if (a + b + c > 0) {
        end--
      } else {
        start++
      }
    }
  }
  return result
}
