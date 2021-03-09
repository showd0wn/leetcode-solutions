# topics = ["滑动窗口", "二分查找", "堆", "二叉搜索树"]

from typing import List
import math
import bisect


class Solution:

    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        """
        近似题 295.数据流的中位数，此题不同之处在于：需要能（高效）删除任意元素
        二分搜索 + 直接插入
        """
        n = len(nums)
        arr: List[int] = sorted(nums[:k])
        res: List[float] = [self.findMedian(arr, k)]

        for i in range(1, n - k + 1):
            arr.remove(nums[i - 1])
            arr.insert(bisect.bisect(arr, nums[i + k - 1]), nums[i + k - 1])
            res.append(self.findMedian(arr, k))

        return res

    def findMedian(self, nums: List[int], n: int) -> float:
        return (nums[math.floor((n - 1) / 2)] + nums[math.ceil((n - 1) / 2)]) / 2
