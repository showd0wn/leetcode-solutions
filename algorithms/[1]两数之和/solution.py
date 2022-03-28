# topics = ["数组"]

from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """time O(n^2), space O(1), n 为 nums 长度"""
        for i in range(len(nums)):
            anotherValue = target - nums[i]
            # 列表 in 查询的时间复杂度为 0(n)
            if anotherValue in nums[i + 1 :]:
                return [i, nums.index(anotherValue, i + 1)]

        return []
