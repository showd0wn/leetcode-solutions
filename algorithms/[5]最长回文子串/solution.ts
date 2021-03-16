// topics = ["字符串", "动态规划"]

function longestPalindrome(s: string): string {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
  let res = '';

  for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = i; j < n; j += 1) {
      if (j == i) {
        dp[i][j] = true;
      } else if (j == i + 1) {
        dp[i][j] = s[i] == s[j];
      } else {
        dp[i][j] = dp[i + 1][j - 1] && s[i] == s[j];
      }

      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.slice(i, j + 1);
      }
    }
  }

  return res;
}
