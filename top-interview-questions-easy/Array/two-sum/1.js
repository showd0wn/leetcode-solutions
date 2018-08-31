/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var len = nums.length
  var i, j
  for (i = 0; i < len - 1; i++) {
    for (j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}
