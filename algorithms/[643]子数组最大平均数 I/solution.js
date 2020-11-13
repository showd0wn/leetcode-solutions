/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function(nums, k) {
  const len = nums.length;
  if (!len) return 0;

  let sum = nums.slice(0, k).reduce((a, b) => a + b);
  let res = sum;

  for (let i = k; i < len; i += 1) {
    sum += nums[i] - nums[i - k];
    res = Math.max(sum, res);
  }

  return res / k;
};
