# topics = ["动态规划"]

from typing import List


class Solution:
    def countSquares(self, matrix: List[List[int]]) -> int:
        """
        近似题 221. 最大正方形
        """
        m, n = len(matrix), len(matrix[0])
        # dp[i][j] 表示以 (i, j) 为右下角，且只包含 1 的正方形的边长最大值
        dp = [[0] * n for _ in range(m)]
        res = 0

        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 0:
                    dp[i][j] = 0
                elif i == 0 or j == 0:
                    dp[i][j] = 1
                else:
                    # 当前位置的 dp[i][j] 等于三个相邻位置的对应的最小值加 1
                    dp[i][j] = min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1

                res += dp[i][j]

        return res
