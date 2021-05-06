# topics = ["字符串", "动态规划"]

from typing import List


class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        """
        Dynamic Programming
        time O(mn), space O(mn), m 和 n 分别为 text1 和 text2 的长度
        """
        m, n = len(text1), len(text2)

        # dp[i][j] 表示 text1 [0, i] 区间和 text2 [0, j] 区间的最长公共子序列
        dp: List[List[int]] = [[0] * (n + 1) for _ in range(m + 1)]

        for i in range(m + 1):
            for j in range(n + 1):
                if i == 0 or j == 0:
                    dp[i][j] = 0
                elif text1[i - 1] == text2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

        return dp[m][n]
