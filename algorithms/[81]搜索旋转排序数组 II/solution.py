# topics = ["二分查找"]

from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        """
        近似题 33.搜索旋转排序数组
        """
        n = len(nums)
        i, j = 0, n - 1

        while i <= j:
            mid = (i + j) // 2

            if nums[mid] == target:
                return True

            # 处理 左 = 中 = 右特殊情况
            if nums[i] == nums[mid] == nums[j]:
                i += 1
                j -= 1
                continue

            # 1. [i, mid] 有序
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

        return False
