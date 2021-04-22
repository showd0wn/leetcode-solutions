// topics = ["动态规划"]

// 利用前缀和，求任意二维区域和。同 304.二维区域和检索 - 矩阵不可变。
export class NumMatrix {
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

function maxSumSubmatrix(matrix: number[][], k: number): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const numMatrix = new NumMatrix(matrix);
  let res = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      for (let s = i; s < m; s += 1) {
        for (let t = j; t < n; t += 1) {
          const sum = numMatrix.sumRegion(i, j, s, t);
          if (sum == k) {
            return k;
          }
          if (sum < k) {
            res = Math.max(res, sum);
          }
        }
      }
    }
  }

  return res;
}
