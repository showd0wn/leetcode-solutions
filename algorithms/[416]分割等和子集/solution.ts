// topics = ["动态规划"]

function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((acc, cur) => (acc += cur), 0);
  if (sum % 2 == 1) {
    return false;
  }

  const n = nums.length;
  const half = sum / 2;
  // dp[i][j] 表示数组区间 [0, i] 的数能否组成元素和 j
  const dp = Array.from({ length: n }, () => new Array(half + 1).fill(false));

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j <= half; j += 1) {
      if (j == 0) {
        dp[i][j] = true;
      } else if (i == 0) {
        dp[i][j] = nums[i] == j;
      } else {
        dp[i][j] = dp[i - 1][j] || (dp[i - 1][j - nums[i]] ?? false);
      }
    }
  }

  return dp[n - 1][half];
}
