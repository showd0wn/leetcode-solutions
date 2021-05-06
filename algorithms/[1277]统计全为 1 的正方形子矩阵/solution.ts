// topics = ["动态规划"]

/**
 * Dynamic Programming
 * time O(mn), space O(mn), m 和 n 为矩阵行列数
 */
function countSquares(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;

  // dp[i][j] 表示以 (i, j) 为右下角，且只包含 1 的正方形的边长最大值
  const dp = Array.from({ length: m }, () => new Array<number>(n).fill(0));
  let res = 0;

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (matrix[i][j] == 0) {
        dp[i][j] = 0;
      } else if (i == 0 || j == 0) {
        dp[i][j] = 1;
      } else {
        // 当前位置的 dp[i][j] 等于三个相邻位置的对应的最小值加 1
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      }
      res += dp[i][j];
    }
  }

  return res;
}
