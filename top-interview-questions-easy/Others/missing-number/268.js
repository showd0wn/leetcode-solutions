/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const len = nums.length
  return (len * (len + 1) / 2) -  nums.reduce((x, y) => x + y)
}
