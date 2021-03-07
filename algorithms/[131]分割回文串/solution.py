# topics = ["回溯算法", "动态规划"]

from typing import List


class Solution:
    def partition(self, s: str) -> List[List[str]]:
        n = len(s)

        # dp[i][j] 表示 s[i..j] (闭区间)是否为回文，空串视为回文
        dp: List[List[bool]] = [[True] * n for _ in range(n)]

        for i in range(n)[::-1]:
            for j in range(i + 1, n):
                dp[i][j] = (s[i] == s[j]) and dp[i + 1][j - 1]

        res: List[List[str]] = []
        ans: List[str] = []

        def backtrack(i: int):
            if i == n:
                res.append(ans[:])
                return

            for j in range(i, n):
                if dp[i][j]:
                    ans.append(s[i:j + 1])
                    backtrack(j + 1)
                    ans.pop()

        backtrack(0)

        return res
