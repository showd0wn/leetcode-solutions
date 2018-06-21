class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        maxProfit = 0
        length = len(prices)
        for i in range(0, length - 1):
            if (prices[i] < prices[i + 1]):
                maxProfit += prices[i + 1] - prices[i]
        return maxProfit
