from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        length = len(nums)
        for i in range(1, length)[::-1]:
            if (nums[i] == nums[i - 1]):
                nums.pop(i)
        return len(nums)
