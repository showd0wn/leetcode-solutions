// topics = ["动态规划"]

function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  const dp: number[] = new Array(n).fill(1);

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
