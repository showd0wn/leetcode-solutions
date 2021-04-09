# topics = ["二分查找"]

from typing import List


class Solution:
    def findMin(self, nums: List[int]) -> int:
        """
        近似题 81.搜索旋转排序数组 II
        """
        n = len(nums)
        i, j = 0, n - 1

        while i < j:
            if nums[i] < nums[j]:
                return nums[i]

            mid: int = (i + j) // 2
            # 恢复二段性处理中，最坏的情况下复杂度是 O(n)
            if nums[mid] == nums[i] == nums[j]:
                i += 1
                j -= 1
            elif nums[mid] >= nums[i]:
                # [i, mid] 有序
                i = mid + 1
            else:
                # [mid, j] 有序
                j = mid

        return nums[i]
