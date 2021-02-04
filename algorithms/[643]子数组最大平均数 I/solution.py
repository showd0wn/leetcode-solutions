from typing import List


class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        n = len(nums)
        res = total = sum(nums[:k])

        for i in range(1, n - k + 1):
            total = total + nums[i + k - 1] - nums[i - 1]
            res = max(res, total)

        return res / k
