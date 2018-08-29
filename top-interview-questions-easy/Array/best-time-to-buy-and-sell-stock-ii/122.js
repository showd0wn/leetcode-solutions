/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  const len = prices.length
  let maxProfit = 0
  for (let i = 0; i < len - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      maxProfit += prices[i + 1] - prices[i]
    }
  }
  return maxProfit
}
