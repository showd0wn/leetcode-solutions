from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        for i in range(1, len(prices)):
            profit += max(prices[i] - prices[i - 1], 0)
        return profit


s = Solution()
print(s.maxProfit([7, 1, 5, 3, 6, 4]))
