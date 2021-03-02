// topics = ["动态规划"]

class NumMatrix {
  dp: number[][];
  constructor(matrix: number[][]) {
    const m = matrix.length;
    const n = matrix[0]?.length ?? 0;
    const dp = Array.from({ length: m }, () => new Array(n));

    for (let i = 0; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (i == 0 && j == 0) {
          dp[i][j] = matrix[0][0];
        } else if (i == 0) {
          dp[i][j] = dp[i][j - 1] + matrix[i][j];
        } else if (j == 0) {
          dp[i][j] = dp[i - 1][j] + matrix[i][j];
        } else {
          dp[i][j] = dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1] + matrix[i][j];
        }
      }
    }

    this.dp = dp;
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    if (row1 == 0 && col1 == 0) {
      return this.dp[row2][col2];
    }
    if (row1 == 0) {
      return this.dp[row2][col2] - this.dp[row2][col1 - 1];
    }
    if (col1 == 0) {
      return this.dp[row2][col2] - this.dp[row1 - 1][col2];
    }
    return this.dp[row2][col2] + this.dp[row1 - 1][col1 - 1] - this.dp[row2][col1 - 1] - this.dp[row1 - 1][col2];
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
