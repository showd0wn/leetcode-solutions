/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = function(s) {
  let n = s.length;
  const dp = new Array(n);

  for (let i = 0; i < n; i += 1) {
    dp[i] = new Array(n).fill(0);
    dp[i][i] = 1;
  }

  for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = i + 1; j < n; j += 1) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
};
