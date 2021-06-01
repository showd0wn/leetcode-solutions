// topics = ["动态规划"]

/**
 * Dynamic Programming
 * time O(n^3), space O(n^2), n 为字符串长度
 */
function strangePrinter(s: string): number {
  const n = s.length;
  // dp[i][j] 表示打印完成区间 [i,j] 的最少操作数
  const dp = Array.from({ length: n }, () => new Array<number>(n).fill(0));

  for (let i = n - 1; i >= 0; i -= 1) {
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j += 1) {
      if (s[i] == s[j]) {
        dp[i][j] = dp[i][j - 1];
      } else {
        let minn = Number.MAX_SAFE_INTEGER;
        for (let k = i; k < j; k += 1) {
          minn = Math.min(minn, dp[i][k] + dp[k + 1][j]);
        }
        dp[i][j] = minn;
      }
    }
  }

  return dp[0][n - 1];
}
