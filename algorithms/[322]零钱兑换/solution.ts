// topics = ["动态规划"]

function coinChange(coins: number[], amount: number): number {
  const dp = new Array<number>(amount + 1).fill(amount + 1);
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
