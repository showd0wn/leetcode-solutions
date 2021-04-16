# topics = ["动态规划"]

from typing import List


class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        if n == 2:
            return max(nums[0], nums[1])
        # 分两段范围计算最高总金额
        return max(self.robRange(nums[:-1]), self.robRange(nums[1:]))

    def robRange(self, nums: List[int]) -> int:
        n = len(nums)
        # dp[i] 表示 [0, i] 家能偷窃到的最高金额
        dp: List[int] = [0] * n
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])

        for i in range(2, n):
            dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

        return dp[n - 1]
