/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let min = 0
  let max = nums.length - 1
  for (let mid = Math.floor(max / 2); min < max; mid = Math.floor((min + max) / 2)) {
    if (min === mid) return nums[min] < nums[max] ? max : min
    min = nums[mid] < nums[mid + 1] ? mid : min
    max = nums[mid] > nums[mid + 1] ? mid : max
  }
  return 0
}
