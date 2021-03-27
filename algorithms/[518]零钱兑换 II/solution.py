# topics = ["动态规划"]

from typing import List


class Solution:
    """
    完全背包 & 恰好装满，求方案数（组合数）
    """

    def change(self, amount: int, coins: List[int]) -> int:
        # dp[i] 表示组成金额 i 使用的硬币方案数
        dp = [0] * (amount + 1)
        dp[0] = 1

        # 注意遍历顺序！
        for coin in coins:
            for i in range(1, amount + 1):
                if i >= coin:
                    dp[i] += dp[i - coin]

        return dp[amount]
