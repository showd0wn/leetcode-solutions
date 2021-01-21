from typing import List


class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        # 最终结果可能包含
        # 1. 0 个负数 --> 取最大三个数
        # 2. 3 个负数（全负数情况） --> 取最大三个数
        # 3. 2 个负数 --> 取最大两个负数和最大的正数
        n = len(nums)
        nums.sort()
        return max(nums[0] * nums[1] * nums[n - 1], nums[n - 3] * nums[n - 2] * nums[n - 1])
