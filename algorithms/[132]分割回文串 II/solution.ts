// topics = ["动态规划"]

function minCut(s: string): number {
  const n = s.length;

  // dp[i][j] 表示 s[i..j] (闭区间)是否为回文，空串视为回文
  const dp = new Array(n).fill(0).map(() => new Array<boolean>(n).fill(true));

  for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = i + 1; j < n; j += 1) {
      dp[i][j] = s[i] == s[j] && dp[i + 1][j - 1];
    }
  }

  // res[i] 表示前缀 s[0..i] 的最少分割次数
  const res = new Array<number>(n).fill(Number.MAX_SAFE_INTEGER);

  for (let i = 0; i < n; i += 1) {
    if (dp[0][i]) {
      res[i] = 0;
    } else {
      for (let j = 0; j < i; j += 1) {
        if (dp[j + 1][i]) {
          res[i] = Math.min(res[i], res[j] + 1);
        }
      }
    }
  }

  return res[n - 1];
}
