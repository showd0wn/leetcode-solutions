var containsDuplicate = function(nums) {
  return nums.length !== [...new Set(nums)].length
}
