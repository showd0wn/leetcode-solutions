# topics = ["字符串", "动态规划"]


from typing import List


class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        n = len(s)
        dp: List[List[int]] = [[0] * n for _ in range(n)]

        for i in range(n)[::-1]:
            for j in range(i, n):
                if j == i:
                    dp[i][j] = 1
                elif s[j] == s[i]:
                    dp[i][j] = dp[i + 1][j - 1] + 2
                else:
                    dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])

        return dp[0][n - 1]
