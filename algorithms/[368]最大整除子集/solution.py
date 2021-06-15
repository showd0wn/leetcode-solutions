# topics = ["动态规划"]

from typing import List


class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        """
        近似题 300.最长递增子序列
        """
        n = len(nums)
        nums.sort()

        # dp[i] 表示在 [0, i] 区间，必须包含 nums[i] 的最大整数子集个数
        dp = [1] * n

        for i in range(n):
            for j in range(i):
                if nums[i] % nums[j] == 0:
                    dp[i] = max(dp[i], dp[j] + 1)

        # 最大子集的长度
        maxc = max(dp)
        # 最大子集中的最大值
        maxv = nums[dp.index(maxc)]
        res: List[int] = []

        for i in range(n - 1, -1, -1):
            num = nums[i]
            if maxv % num == 0 and maxc == dp[i]:
                maxv = num
                maxc -= 1
                res.append(num)

        return res[::-1]
