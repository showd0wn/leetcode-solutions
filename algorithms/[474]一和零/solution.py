# topics = ["动态规划"]

from typing import List


class Solution:
    """
    0-1 背包(二维)
    """

    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:
        # dp[i][j] 表示不超过 i 个 0 和 j 个 1 的最长子集
        dp: List[List[int]] = [[0] * (n + 1) for _ in range(m + 1)]

        for k in range(len(strs)):
            c0 = strs[k].count('0')
            c1 = strs[k].count('1')
            for i in range(m + 1)[::-1]:
                for j in range(n + 1)[::-1]:
                    if k == 0:
                        dp[i][j] = 0 if (c0 > i or c1 > j) else 1
                    elif i >= c0 and j >= c1:
                        dp[i][j] = max(dp[i][j], dp[i - c0][j - c1] + 1)

        return dp[m][n]
