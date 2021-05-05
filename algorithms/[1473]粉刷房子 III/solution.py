# topics = ["动态规划"]

from typing import List
from sys import maxsize


class Solution:
    def minCost(
        self, houses: List[int], cost: List[List[int]], m: int, n: int, target: int
    ) -> int:
        """
        DP
        time O(m·n^2 ·target), space O(m·n·target)
        """
        # 将颜色调整为从 0 开始编号，没有被涂色标记为 -1
        houses = [c - 1 for c in houses]

        # dp(i,j,k) 表示将 [0, i] 的房子都涂上颜色，最末尾的第 i 个房子的颜色为 j，并且它属于第 k 个街区时，需要的最少花费
        # dp 所有元素初始化为极大值
        dp = [[[maxsize] * target for _ in range(n)] for _ in range(m)]

        for i in range(m):
            for j in range(n):
                if houses[i] != -1 and houses[i] != j:
                    continue

                for k in range(target):
                    # 设第 i - 1 个房子的颜色为 j0
                    for j0 in range(n):
                        if j == j0:
                            if i == 0:
                                if k == 0:
                                    dp[i][j][k] = 0
                            else:
                                dp[i][j][k] = min(dp[i][j][k], dp[i - 1][j][k])
                        elif i > 0 and k > 0:
                            dp[i][j][k] = min(dp[i][j][k], dp[i - 1][j0][k - 1])

                    if dp[i][j][k] != maxsize and houses[i] == -1:
                        dp[i][j][k] += cost[i][j]

        ans = min(dp[m - 1][j][target - 1] for j in range(n))

        return -1 if ans == maxsize else ans
