# topics = ["滑动窗口", "二分查找"]

from typing import List
from sortedcontainers import SortedList


class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        """
        有序容器 + 遍历，超时
        """
        n = len(nums)
        sl = SortedList(nums[: k + 1])

        if self.helper(sl, t):
            return True

        for j in range(k + 1, n):
            sl.add(nums[j])
            sl.remove(nums[j - k - 1])
            if self.helper(sl, t):
                return True

        return False

    def helper(self, nums: List[int], t: int) -> bool:
        for i in range(1, len(nums)):
            if nums[i] - nums[i - 1] <= t:
                return True

        return False

    def containsNearbyAlmostDuplicate2(self, nums: List[int], k: int, t: int) -> bool:
        """
        有序容器 + 二分查找
        """
        sl = SortedList()

        for j, ele in enumerate(nums):
            idx = sl.bisect_left(ele)

            if idx - 1 >= 0 and ele - sl[idx - 1] <= t:
                return True
            if idx < len(sl) and sl[idx] - ele <= t:
                return True

            sl.add(nums[j])
            if len(sl) > k:
                sl.remove(nums[j - k])

        return False
