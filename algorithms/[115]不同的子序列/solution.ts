// topics = ["字符串", "动态规划"]

function numDistinct(s: string, t: string): number {
  const m = s.length;
  const n = t.length;

  if (m < n) {
    return 0;
  }

  // dp[i][j] 表示在 s[i:] 的子序列中 t[j:] 出现的个数
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i += 1) {
    dp[i][n] = 1;
  }

  for (let i = m - 1; i >= 0; i -= 1) {
    for (let j = n - 1; j >= 0; j -= 1) {
      if (s[i] == t[j]) {
        dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
      } else {
        dp[i][j] = dp[i + 1][j];
      }
    }
  }

  return dp[0][0];
}
