/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
  const len = nums.length;

  // 动态规划
  // dp[i] 表示下标 i 结尾的最长上升子序列
  const dp = new Array(len).fill(1);

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};
