// topics = ["动态规划"]

function isScramble(s1: string, s2: string): boolean {
  const n = s1.length;
  // dp[i][j][len] 代表 s1 从 i 开始，s2 从 j 开始，后面长度为 len 的字符是否互为「扰乱字符串」
  const dp: boolean[][][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n + 1).fill(false)));

  // 先处理长度为 1 的情况
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      dp[i][j][1] = s1[i] == s2[j];
    }
  }

  // 区间 dp， 从区间从小到大遍历
  for (let len = 2; len <= n; len += 1) {
    for (let i = 0; i <= n - len; i += 1) {
      for (let j = 0; j <= n - len; j += 1) {
        for (let k = 1; k < len; k += 1) {
          const a: boolean = dp[i][j][k] && dp[i + k][j + k][len - k];
          const b: boolean = dp[i][j + len - k][k] && dp[i + k][j][len - k];
          if (a || b) {
            dp[i][j][len] = true;
          }
        }
      }
    }
  }

  return dp[0][0][n];
}
