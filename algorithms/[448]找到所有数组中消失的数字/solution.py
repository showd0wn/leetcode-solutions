# topics = ["数组"]

from typing import List


class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        # 原地修改
        for num in nums:
            if nums[abs(num) - 1] > 0:
                nums[abs(num) - 1] *= -1

        res = []

        for i in range(len(nums)):
            if nums[i] > 0:
                res.append(i + 1)

        return res
