/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentSum = nums[0]
  let totalSum = nums[0]
  for(var i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], nums[i] + currentSum)
    totalSum = Math.max(totalSum, currentSum)
  }
  return totalSum
}
