# topics = ["动态规划"]

from typing import List


class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        """
        近似题 518. 零钱兑换 II
        完全背包 & 恰好装满，求方案数（排列数）
        """
        dp: List[int] = [0] * (target + 1)
        dp[0] = 1

        # 先遍历背包大小， 再遍历物品！
        for i in range(1, target + 1):
            for num in nums:
                if i >= num:
                    dp[i] += dp[i - num]

        return dp[target]
