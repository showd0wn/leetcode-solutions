# topics = ['动态规划']

from typing import List


class Solution:
    def maxUncrossedLines(self, nums1: List[int], nums2: List[int]) -> int:
        """
        Dynamic Programming
        time O(mn), space O(mn), m 和 n 分别为 nums1 和 nums2 的长度
        """
        m, n = len(nums1), len(nums2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]

        for i, num1 in enumerate(nums1):
            for j, num2 in enumerate(nums2):
                if num1 == num2:
                    dp[i + 1][j + 1] = dp[i][j] + 1
                else:
                    dp[i + 1][j + 1] = max(dp[i][j + 1], dp[i + 1][j])

        return dp[m][n]
