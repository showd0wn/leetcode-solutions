// topics = ["动态规划"]

function coinChange(coins: number[], amount: number): number {
  // dp[i] 表示组成金额 i 最少使用的硬币数量
  const dp = new Array<number>(amount + 1).fill(amount + 1);

  // 组成 0 金额 == 使用 0 个硬币
  dp[0] = 0;

  for (let i = 1; i < amount + 1; i += 1) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
}
