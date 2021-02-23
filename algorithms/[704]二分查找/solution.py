# topics = ["二分查找"]

from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums)

        while left < right:
            mid = (left + right) // 2
            if target == nums[mid]:
                return mid
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid

        return -1
