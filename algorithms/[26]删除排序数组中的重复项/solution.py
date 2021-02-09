#  topics = ["数组"]

from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        length = len(nums)
        for i in range(1, length)[::-1]:
            if nums[i] == nums[i - 1]:
                # pop(i) 的时间复杂度为 0(n)
                nums.pop(i)
        return len(nums)
