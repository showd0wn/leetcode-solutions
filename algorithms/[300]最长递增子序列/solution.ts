// topics = ["动态规划"]

function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  // dp[i] 为考虑前 i 个元素，以第 i 个数字结尾的最长上升子序列的长度（nums[i] 必须被选取）。
  const dp = new Array<number>(n).fill(1);

  let res = dp[0];
  for (let i = 1; i < n; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        res = Math.max(res, dp[i]);
      }
    }
  }

  return res;
}
