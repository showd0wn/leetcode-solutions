/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const arr = new Array(amount + 1).fill(amount + 1)
  arr[0] = 0
  for (let  i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        arr[i] = Math.min(arr[i], arr[i - coins[j]] + 1)
      }
    }
  }
  return arr[amount] > amount ? -1 : arr[amount]
}
