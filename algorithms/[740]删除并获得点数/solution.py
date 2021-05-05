# topics = ["动态规划"]

from typing import List
from collections import Counter


class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        """
        近似题 198.打家劫舍
        DP
        time O(nlogn), space O(n), n 为数组长度
        """
        cnt = Counter(nums)
        _nums = sorted(cnt.keys())
        n = len(_nums)

        # dp[i] 表示前 i 个数的最大点数
        dp = [0] * (n + 1)
        dp[1] = _nums[0] * cnt[_nums[0]]

        for i in range(2, n + 1):
            total = _nums[i - 1] * cnt[_nums[i - 1]]
            if _nums[i - 1] - _nums[i - 2] == 1:
                dp[i] = max(dp[i - 1], dp[i - 2] + total)
            else:
                dp[i] = dp[i - 1] + total

        return dp[n]
