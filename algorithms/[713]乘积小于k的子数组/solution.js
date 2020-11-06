/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) return 0;

  let result = 0;
  let l = 0;
  let prod = 1;
  for (let r = 0; r < nums.length; r += 1) {
    prod *= nums[r];
    while (prod >= k) {
      prod /= nums[l];
      l += 1;
    }
    result += r - l + 1;
  }

  return result;
};
