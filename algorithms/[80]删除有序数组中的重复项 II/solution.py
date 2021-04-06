# topics = ["数组", "双指针"]

from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        n = len(nums)
        i = j = 2

        # 当快指针遍历完数组，慢指针指向的为不重复数组结尾 + 1
        while j < n:
            if i < 2 or nums[i - 2] != nums[j]:
                nums[i] = nums[j]
                i += 1
            # 出现第三个相同的元素，快指针单独前进
            j += 1

        return i
