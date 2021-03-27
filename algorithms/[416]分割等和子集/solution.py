# topics = ["动态规划"]

from typing import List


class Solution:
    """
    0-1 背包问题，是否能恰好装满
    """

    def canPartition(self, nums: List[int]) -> bool:
        if sum(nums) % 2 == 1:
            return False

        n = len(nums)
        half = sum(nums) // 2
        # dp[i][j] 表示数组区间 [0, i] 的数能否组成元素和 j
        dp: List[List[bool]] = [[False] * (half + 1) for _ in range(n)]

        for i in range(n):
            for j in range(half + 1):
                if j == 0:
                    dp[i][j] = True
                elif i == 0:
                    dp[i][j] = nums[i] == j
                else:
                    dp[i][j] = dp[i - 1][j] or (j >= nums[i] and dp[i - 1][j - nums[i]])

        return dp[n - 1][half]

    def canPartition2(self, nums: List[int]) -> bool:
        """
        滚动数组，优化空间复杂度
        """
        if sum(nums) % 2 == 1:
            return False

        n = len(nums)
        half = sum(nums) // 2
        # dp[i] 表示数组区间 [0, i] 的数能否平均分割
        dp: List[bool] = [True] + [False] * half

        for i in range(n):
            for j in range(nums[i], half + 1)[::-1]:
                dp[j] |= dp[j - nums[i]]

        return dp[half]
