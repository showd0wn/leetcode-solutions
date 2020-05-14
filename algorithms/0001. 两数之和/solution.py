from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            anotherValue = target - nums[i]
            if (anotherValue not in nums[i + 1:]):
                continue
            return [i, nums.index(anotherValue, i + 1)]
