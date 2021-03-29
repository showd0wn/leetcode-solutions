// topics = ["动态规划"]

function findMaxForm(strs: string[], m: number, n: number): number {
  // dp[i][j] 表示不超过 i 个 0 和 j 个 1 的最长子集
  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));

  for (let k = 0, len = strs.length; k < len; k += 1) {
    const arr = strs[k].split('');
    const c0 = arr.filter(c => c == '0').length;
    const c1 = arr.filter(c => c == '1').length;
    for (let i = m; i >= 0; i -= 1) {
      for (let j = n; j >= 0; j -= 1) {
        if (k == 0) {
          dp[i][j] = Number(c0 <= i && c1 <= j);
        } else if (i >= c0 && j >= c1) {
          dp[i][j] = Math.max(dp[i][j], dp[i - c0][j - c1] + 1);
        }
      }
    }
  }

  return dp[m][n];
}
