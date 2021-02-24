#  topisc = ["数组", "分治算法"]

from typing import List


class Solution:
    # 参考 https://leetcode-cn.com/problems/maximum-subarray/solution/bao-li-qiu-jie-by-pandawakaka/
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        m = n // 2

        # 递归终止条件
        if n == 1:
            return nums[0]
        else:
            # 递归计算左半边最大子序和
            max_left = self.maxSubArray(nums[0:m])
            # 递归计算右半边最大子序和
            max_right = self.maxSubArray(nums[m:n])

        # 计算中间的最大子序和
        # 1. 从右到左计算左边的最大子序和
        max_l = nums[m - 1]
        tmp = 0
        for i in range(m - 1, -1, -1):
            tmp += nums[i]
            max_l = max(tmp, max_l)
        # 2. 从左到右计算右边的最大子序和
        max_r = nums[m]
        tmp = 0
        for i in range(m, n):
            tmp += nums[i]
            max_r = max(tmp, max_r)
        # 3. 相加
        max_mid = max_l + max_r

        return max(max_left, max_mid, max_right)
