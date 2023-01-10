# topics = ["数组", "滑动窗口"]

from typing import List


class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        """
        前缀和 + 滑动窗口
        time O(n), space O(1), n 为 nums 长度
        """
        # 滑动窗口 left 和 right 分别表示前缀和后缀的边界
        left, right = -1, 0
        # left = -1 表示前缀为 0, right = 0 表示全部后缀
        lsum, rsum = 0, sum(nums)

        n = len(nums)
        res = n + 1
        while left < n:
            if left != -1:
                lsum += nums[left]
            while right < n and lsum + rsum > x:
                rsum -= nums[right]
                right += 1
            if lsum + rsum == x:
                res = min(res, left + 1 + n - right)
            left += 1

        return -1 if res > n else res
