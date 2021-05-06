// topics = ["动态规划"]

/**
 * DP
 * time O(n^2), space O(n^2), n 为 grid 长度
 */
function maxDistance(grid: number[][]): number {
  const n = grid.length;
  const dp: number[][] = [];

  // 初始化
  for (let i = 0; i < n; i += 1) {
    dp[i] = [];
    for (let j = 0; j < n; j += 1) {
      dp[i][j] = grid[i][j] == 0 ? Number.MAX_SAFE_INTEGER : 0;
    }
  }

  // 第一遍动态规划，从左上到右下
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (grid[i][j] == 0) {
        if (i - 1 >= 0) {
          dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
        }
        if (j - 1 >= 0) {
          dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
        }
      }
    }
  }

  // 第二遍动态规划，从右下到左上
  for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = n - 1; j >= 0; j -= 1) {
      if (grid[i][j] == 0) {
        if (i + 1 < n) {
          dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
        }
        if (j + 1 < n) {
          dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
        }
      }
    }
  }

  let res = -1;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (grid[i][j] == 0) {
        res = Math.max(res, dp[i][j]);
      }
    }
  }

  return res == Number.MAX_SAFE_INTEGER ? -1 : res;
}
