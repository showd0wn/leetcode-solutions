from typing import List


class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        # 总和
        total = sum(nums)
        # 前缀和
        pre_sum = 0

        for idx, ele in enumerate(nums):
            if (pre_sum * 2 + ele == total):
                return idx
            pre_sum += ele

        return -1
