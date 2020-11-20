/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  const n = s.length;

  // 动态规划
  // dp[i][j] 代表字符串下标从 i 到 j 是否为回文子串
  const dp = [];
  let res = '';

  // 根据递推关系，按子串长度从小到大遍历
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
