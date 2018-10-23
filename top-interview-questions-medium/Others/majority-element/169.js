/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {}
  for (let num of nums) {
    if (map[num] !== undefined) {
      map[num] += 1
    } else {
      map[num] = 1
    }
  }
  for (let i in map) {
    if (map[i] > nums.length / 2) {
      return Number(i)
    }
  }
}
