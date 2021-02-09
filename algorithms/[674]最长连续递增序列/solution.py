# topics = ["数组"]

from typing import List


class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        n = len(nums)

        if n == 0 or n == 1:
            return n

        res: List[int] = [1]
        for idx in range(1, n):
            if nums[idx] > nums[idx - 1]:
                res[-1] += 1
            else:
                res.append(1)

        return max(res)
