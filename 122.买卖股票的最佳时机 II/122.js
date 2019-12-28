/**
 * @param {number[]} prices
 * @return {number}
 */

// eslint-disable-next-line no-unused-vars
const maxProfit = function(prices) {
    let result = 0
    for (let i = 1; i < prices.length; i += 1) {
        result += Math.max(prices[i] - prices[i - 1], 0)
    }
    return result
}
