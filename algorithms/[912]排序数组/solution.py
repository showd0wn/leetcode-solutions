# topics = ["数组", "分治算法"]

from typing import List


class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        """
        快速排序
        time O(nlogn), space O(logn), n 为数组长度
        """
        n = len(nums)

        def quickSort(left: int, right: int) -> List[int]:
            if left < right:
                partition_index = partition(left, right)
                quickSort(left, partition_index - 1)
                quickSort(partition_index + 1, right)
            return nums

        def partition(left: int, right: int) -> int:
            privot = left
            i = privot + 1

            for j in range(i, right + 1):
                if nums[j] < nums[privot]:
                    nums[i], nums[j] = nums[j], nums[i]
                    i += 1

            nums[privot], nums[i - 1] = nums[i - 1], nums[privot]

            return i - 1

        return quickSort(0, n - 1)
