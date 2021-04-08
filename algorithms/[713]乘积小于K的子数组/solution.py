# topics = ["数组", "滑动窗口"]

from typing import List


class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k <= 1:
            return 0
        n = len(nums)
        res = 0
        prod = 1
        i = j = 0

        while j < n:
            prod *= nums[j]
            while prod >= k:
                prod //= nums[i]
                i += 1
            # 新增 j - i + 1 个子数组
            res += j - i + 1
            j += 1

        return res
