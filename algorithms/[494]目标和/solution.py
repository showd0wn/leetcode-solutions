# topics = ["动态规划"]

from typing import List


class Solution:
    """
    0-1 背包问题 变种问题
    """

    def findTargetSumWays(self, nums: List[int], S: int) -> int:
        total = sum(nums)

        if abs(S) > total:
            return 0

        n = len(nums)
        # dp[i][j] 表示数组区间 [0, i] 的数能否组成目标和 j - total 的方案数
        dp: List[List[int]] = [[0] * (2 * total + 1) for _ in range(n)]

        for i, num in enumerate(nums):
            for j in range(2 * total + 1):
                if i == 0:
                    dp[i][j] += num == j - total
                    dp[i][j] += num == total - j
                else:
                    if 0 <= j + num <= 2 * total:
                        dp[i][j] += dp[i - 1][j + num]
                    if 0 <= j - num <= 2 * total:
                        dp[i][j] += dp[i - 1][j - num]

        return dp[n - 1][S + total]
