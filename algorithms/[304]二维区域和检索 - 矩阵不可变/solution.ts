// topics = ["动态规划"]

class NumMatrix {
  dp: number[][];
  constructor(matrix: number[][]) {
    const m = matrix.length;
    const n = matrix[0]?.length ?? 0;
    const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));

    // 二维前缀和
    for (let i = 1; i <= m; i += 1) {
      for (let j = 1; j <= n; j += 1) {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1] + matrix[i - 1][j - 1];
      }
    }

    this.dp = dp;
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1];
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
