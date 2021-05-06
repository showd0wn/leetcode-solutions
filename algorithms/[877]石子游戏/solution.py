# topics = ["动态规划"]

from typing import List


class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        """
        同 486.预测赢家
        Dynamic Programming
        time O(n^2), space O(n^2), n 为石子堆数量
        """
        n = len(piles)
        # dp[i][j] 表示先手玩家在区间 [i, j] 能拿到的最大分数
        dp: List[List[int]] = [[0] * n for _ in range(n)]

        for i in range(n)[::-1]:
            for j in range(i, n):
                if j == i:
                    dp[i][j] = piles[i]
                elif j == i + 1:
                    dp[i][j] = max(piles[i], piles[j])
                else:
                    # 先手玩家取左堆情况下（然后后手玩家接下来的取法，会使得先手玩家的分数尽量小）
                    left = piles[i] + min(dp[i + 2][j], dp[i + 1][j - 1])
                    # 先手玩家取右堆情况下（然后后手玩家接下来的取法，会使得先手玩家的分数尽量小）
                    right = piles[j] + min(dp[i + 1][j - 1], dp[i][j - 2])

                    dp[i][j] = max(left, right)

        return dp[0][n - 1] > sum(piles) / 2
