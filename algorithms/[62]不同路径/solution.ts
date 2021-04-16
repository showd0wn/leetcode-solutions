// topics = ["动态规划"]

function uniquePaths(m: number, n: number): number {
  // 滚动数组
  const dp: number[] = [];

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i == 0) {
        dp[j] = 1;
      } else if (j == 0) {
        dp[j] = 1;
      } else {
        dp[j] = dp[j] + dp[j - 1];
      }
    }
  }

  return dp[n - 1];
}
