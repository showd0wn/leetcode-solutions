// topics = ["动态规划"]

function change(amount: number, coins: number[]): number {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  // 这里是求组合数，必须注意遍历顺序
  // 外层遍历物品，内层遍历背包容量
  for (let coin of coins) {
    for (let i = 1; i < amount + 1; i += 1) {
      dp[i] += dp[i - coin] ?? 0;
    }
  }

  return dp[amount];
}
