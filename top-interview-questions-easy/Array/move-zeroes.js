/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var len = nums.length
  var i, j
  for (i = 0; i < len - 1; i++) {
    if (nums[i]) continue
    for (j = i + 1; j < len; j++) {
      if (!nums[j]) continue
      [nums[i], nums[j]] = [nums[j], nums[i]]
      break
    }
  }
}
