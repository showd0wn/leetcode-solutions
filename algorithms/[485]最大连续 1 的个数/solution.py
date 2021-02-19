# topics = ["数组"]

from typing import List


class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        # 最大连续 1 的个数
        res = 0
        # 当前连续 1 的个数
        count = 0

        for num in nums:
            if num == 0:
                res = max(res, count)
                count = 0
            else:
                count += 1

        return max(res, count)
