# topics = ["数组"]

from typing import List


class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        has_next = False

        # 从后往前遍历，找到第一个 i, 存在 nums[i] < nums[j], j 在 [i + 1, n - 1] 区间，且尽量靠右（即尽量小）
        i = n - 1
        while i >= 0:
            j = n - 1
            while j > i:
                if nums[j] > nums[i]:
                    has_next = True
                    break
                j -= 1
            if has_next is True:
                nums[i], nums[j] = nums[j], nums[i]
                break
            i -= 1

        # 反转 [start, end]
        start = i + 1
        end = n - 1
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1
