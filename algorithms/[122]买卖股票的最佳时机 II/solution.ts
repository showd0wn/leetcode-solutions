function maxProfit(prices: number[]): number {
  // 求连续递增序列和
  let res = 0;
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] > prices[i - 1]) {
      res += prices[i] - prices[i - 1];
    }
  }
  return res;
}
