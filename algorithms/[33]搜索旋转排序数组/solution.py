# topics = ["二分查找"]

from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        n = len(nums)
        i, j = 0, n - 1

        while i <= j:
            mid = (i + j) // 2

            if nums[mid] == target:
                return mid

            # 1. [i, mid] 有序(即：num[mid] >= nums[i] 或 num[mid] > nums[j])
            if nums[mid] >= nums[i]:
                if nums[i] <= target < nums[mid]:
                    j = mid - 1
                else:
                    i = mid + 1

            # 2. [mid, j] 有序
            else:
                if nums[mid] < target <= nums[j]:
                    i = mid + 1
                else:
                    j = mid - 1

        return -1
