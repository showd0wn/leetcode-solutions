/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = function(nums, k) {
  const sum = nums.reduce((a, b) => a + b);
  const sums = new Array(k).fill(0);
  nums.sort((a, b) => b - a);
  return backtrace(nums, sums, 0, k, sum / k);
};

// 回溯
const backtrace = function(nums, sums, i, k, average) {
  if (i === nums.length) {
    return true;
  }

  for (let j = 0; j < k; j += 1) {
    if (sums[j] > average || sums[j] + nums[i] > average) continue;
    sums[j] += nums[i];
    if (backtrace(nums, sums, i + 1, k, average)) {
      return true;
    }
    sums[j] -= nums[i];
  }
  return false;
}
