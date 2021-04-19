# topics = ["数组", "双指针"]

from typing import List


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        n = len(nums)
        i, j = 0, n - 1

        while True:
            while i < n and nums[i] != val:
                i += 1
            while j >= 0 and nums[j] == val:
                j -= 1

            if i > j:
                return i

            nums[i], nums[j] = nums[j], nums[i]
