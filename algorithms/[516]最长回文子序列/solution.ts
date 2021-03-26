// topics = ["字符串", "动态规划"]

function longestPalindromeSubseq(s: string): number {
  const n = s.length;
  // dp[i][j] 表示区间 [i, j] 间的最长回文子序列
  const dp = Array.from({ length: n }, () => new Array<number>(n).fill(0));

  for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = i; j < n; j += 1) {
      if (j == i) {
        dp[i][j] = 1;
      } else if (s[j] == s[i]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
}
