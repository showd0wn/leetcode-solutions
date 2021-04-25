# topics = ["动态规划"]

from typing import List


class Solution:
    """
    完全背包 & 恰好装满，求最少装几个物品
    """

    def coinChange(self, coins: List[int], amount: int) -> int:
        # dp[i] 表示组成金额 i 最少使用的硬币数量
        dp = [amount + 1] * (amount + 1)

        # 组成 0 金额 == 使用 0 个硬币
        dp[0] = 0

        for i in range(1, amount + 1):
            for coin in coins:
                if i >= coin:
                    dp[i] = min(dp[i], dp[i - coin] + 1)

        return dp[amount] if dp[amount] <= amount else -1
