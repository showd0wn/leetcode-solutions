/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const array = [0, nums[0], Math.max(nums[0], nums[1])]
  const len = nums.length
  for (let i = 3; i <= len; i++) {
    array[i] = Math.max(array[i - 1], array[i - 2] + nums[i - 1])
  }
  return array[len]
}
