# topics = ["数组"]

from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        for i in range(len(nums))[::-1]:
            if not nums[i]:
                # pop(i) 的时间复杂度为 0(n)
                nums.append(nums.pop(i))
