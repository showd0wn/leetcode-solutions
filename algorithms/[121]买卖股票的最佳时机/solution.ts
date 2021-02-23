// topics = ["数组", "动态规划"]

function maxProfit(prices: number[]): number {
  const n = prices.length;
  const dp: number[] = [];
  dp[0] = 0;

  for (let i = 1; i < n; i += 1) {
    dp[i] = Math.max(0, dp[i - 1] + prices[i] - prices[i - 1]);
  }

  let res = 0;
  for (let num of dp) {
    res = Math.max(res, num);
  }

  return res;
}
