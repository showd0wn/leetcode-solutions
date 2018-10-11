/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (!nums.length) return []
  if (nums.length === 1) return [[], [nums[0]]]
  const last = subsets(nums.slice(0, -1))
  return last.concat(last.map(v => v.concat(nums.slice(-1))))
}
