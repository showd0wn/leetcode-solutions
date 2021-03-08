# topics = ["动态规划"]

from typing import List


class Solution:
    def minCut(self, s: str) -> int:
        """
        两次动态规划
        """
        n = len(s)

        # dp[i][j] 表示 s[i..j] (闭区间)是否为回文，空串视为回文
        dp: List[List[bool]] = [[True] * n for _ in range(n)]

        for i in range(n)[::-1]:
            for j in range(i + 1, n):
                dp[i][j] = (s[i] == s[j]) and dp[i + 1][j - 1]

        # res[i] 表示前缀 s[0..i] 的最少分割次数
        res: List[int] = [2000] * n
        res[0] = 0

        for i in range(1, n):
            if dp[0][i]:
                res[i] = 0
            else:
                for j in range(i):
                    if dp[j + 1][i]:
                        res[i] = min(res[i], res[j] + 1)

        return res[n - 1]
