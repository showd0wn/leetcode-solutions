# topics = ["数组", "双指针"]

from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        """
        近似题 26.删除有序数组中的重复项
        """
        n = len(nums)
        if n <= 2:
            return n

        # 快慢指针
        i = j = 2

        # 当快指针遍历完数组，慢指针指向的为不重复数组结尾 + 1
        while j < n:
            if nums[i - 2] != nums[j]:
                nums[i] = nums[j]
                i += 1
            j += 1

        return i
