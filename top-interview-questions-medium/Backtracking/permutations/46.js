/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []
  const helper = (res, nums, n = 0) => {
    if (n === nums.length - 1) {
      res.push([...nums])
      return
    }
    for (let i = n; i < nums.length; i++) {
      [nums[i], nums[n]] = [nums[n], nums[i]]
      helper(res, nums, n + 1)
      ;[nums[i], nums[n]] = [nums[n], nums[i]]
    }
  }
  helper(result, nums)
  return result
}
