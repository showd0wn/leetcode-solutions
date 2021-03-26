# topics = ["动态规划"]


from typing import List


class Solution:
    def PredictTheWinner(self, nums: List[int]) -> bool:
        n = len(nums)
        # dp[i][j] 表示玩家一在区间 [i, j] 能拿到的最大分数
        dp: List[List[int]] = [[0] * n for _ in range(n)]

        for i in range(n)[::-1]:
            for j in range(i, n):
                if j == i:
                    dp[i][j] = nums[i]
                elif j == i + 1:
                    dp[i][j] = max(nums[i], nums[j])
                else:
                    # 玩家一取左数情况下（然后玩家二接下来的取法，会使得玩家一的分数尽量小）
                    left = nums[i] + min(dp[i + 2][j], dp[i + 1][j - 1])
                    # 玩家一取右数情况下（然后玩家二接下来的取法，会使得玩家一的分数尽量小）
                    right = nums[j] + min(dp[i + 1][j - 1], dp[i][j - 2])

                    dp[i][j] = max(left, right)

        return dp[0][n - 1] >= sum(nums) / 2
