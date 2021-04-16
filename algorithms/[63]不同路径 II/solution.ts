// topics = ["动态规划"]

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  // 滚动数组
  const dp: number[] = [];

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (obstacleGrid[i][j] == 1) {
        dp[j] = 0;
      } else if (i == 0 && j == 0) {
        dp[j] = 1;
      } else if (i == 0) {
        dp[j] = dp[j - 1];
      } else if (j == 0) {
        dp[j] = dp[j];
      } else {
        dp[j] = dp[j] + dp[j - 1];
      }
    }
  }

  return dp[n - 1];
}
