/**
 * @param {string} s
 * @return {string}
 */

// 动态规划 dp
const longestPalindrome = function(s) {
  const n = s.length;
  const dp = [];
  let res = '';

  for (let l = 0; l < n; l += 1) {
    for (let i = 0; i < n - l; i += 1) {
      if (dp[i] === undefined) {
        dp[i] = [];
      }
      let j = i + l;
      if (l === 0) {
        dp[i][j] = true;
      } else if (l === 1) {
        dp[i][j] = s[i] === s[j];
      } else {
        dp[i][j] = (s[i] === s[j]) && dp[i + 1][j - 1];
      }
      if (dp[i][j] && l + 1 > res.length) {
        res = s.slice(i, j + 1);
      }
    }
  }

  return res;
};
