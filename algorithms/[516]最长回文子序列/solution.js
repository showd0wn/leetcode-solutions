/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = function(s) {
  let n = s.length;

  // 动态规划
  // dp[i][j] 表示 从 i 到 j 最长回文子序列长度
  const dp = new Array(n);

  for (let i = 0; i < n; i += 1) {
    dp[i] = new Array(n).fill(0);
    dp[i][i] = 1;
  }
  
  // 根据递推关系，从下往上，从中间往右遍历
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
