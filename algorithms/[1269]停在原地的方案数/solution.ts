// topics = ["动态规划"]

/**
 * DP
 * time O(steps * min(arrLen, steps)), space O(min(arrLen, steps))
 */
function numWays(steps: number, arrLen: number): number {
  const mod = 10 ** 9 + 7;
  const maxColumn = Math.min(Math.floor(steps / 2), arrLen - 1);
  // dp[j] 表示指针位于下标 j 的方案数
  let dp = new Array<number>(maxColumn + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= steps; i += 1) {
    const dpNext = new Array<number>(maxColumn + 1).fill(0);
    for (let j = 0; j <= maxColumn; j += 1) {
      dpNext[j] = dp[j];
      if (j - 1 >= 0) {
        dpNext[j] = (dpNext[j] + dp[j - 1]) % mod;
      }
      if (j + 1 <= maxColumn) {
        dpNext[j] = (dpNext[j] + dp[j + 1]) % mod;
      }
    }
    dp = dpNext;
  }

  return dp[0];
}
