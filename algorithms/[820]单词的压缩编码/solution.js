/**
 * @param {string[]} words
 * @return {number}
 */
const minimumLengthEncoding = function(words) {
  if (!words || !words.length) return 0;

  // 先排序
  words.sort((a, b) => b.length - a.length);
  const len = words.length;

  // 动态规划
  // dp[i] 表示前 i + 1 个单词满足的最小字符串长度
  const dp = [];
  
  dp[0] = words[0].length + 1;
  for (let i = 1; i < len; i += 1) {
    let flag = words.slice(0, i).findIndex(word => word.endsWith(words[i])) !== -1;
    if (flag) {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = dp[i - 1] + words[i].length + 1;
    }
  }

  return dp[len - 1];
};
