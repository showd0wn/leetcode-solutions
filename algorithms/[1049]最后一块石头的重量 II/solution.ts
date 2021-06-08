// topics = ["动态规划"]

/**
 * Dynamic Programming（0-1 背包）
 * time O(n * sum), space O(sum), n 为 stones 长度, sum 为 stones 元素总和
 */
function lastStoneWeightII(stones: number[]): number {
  const sum = stones.reduce((acc, cur) => acc + cur);
  const n = stones.length;
  const m = Math.floor(sum / 2);
  // dp[i][j] 表示前 i 个石头的能否凑整重量 j
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(false));
  dp[0][0] = true;

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j <= m; j += 1) {
      if (j < stones[i]) {
        dp[i + 1][j] = dp[i][j];
      } else {
        dp[i + 1][j] = dp[i][j] || dp[i][j - stones[i]];
      }
    }
  }

  for (let j = m; ; j -= 1) {
    if (dp[n][j]) {
      return sum - 2 * j;
    }
  }
}
