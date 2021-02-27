# topics = ["数组", "栈"]

from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        inf = int(1e9)
        # 前 i - 1 天的历史最低价
        min_price = inf
        # 前 i 天的最大利润
        max_profit = 0

        for price in prices:
            max_profit = max(price - min_price, max_profit)
            min_price = min(price, min_price)

        return max_profit

    def maxProfit2(self, prices: List[int]) -> int:
        """
        单调栈
        参考 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/c-li-yong-shao-bing-wei-hu-yi-ge-dan-diao-zhan-tu-/
        """
        stack: List[int] = []
        max_profit = 0

        # 【技巧】prices 数组的末尾加上一个【哨兵】，确保单调栈中的每个元素都被进行判定
        for val in prices + [0]:
            while stack and val < stack[-1]:
                max_profit = max(max_profit, stack[-1] - stack[0])
                stack.pop()

            stack.append(val)

        return max_profit
