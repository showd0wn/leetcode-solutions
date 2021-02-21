# topics = ["二分查找", "堆", "平衡二叉搜索树"]

from typing import List
import math
import bisect
import heapq


# 解法一 二分搜索 + 直接插入
class MedianFinder:
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.nums: List[int] = []

    def addNum(self, num: int) -> None:
        # 二分搜索 O(logn) + 插入 O(n)
        bisect.insort(self.nums, num)

    def findMedian(self) -> float:
        n = len(self.nums)
        return (self.nums[math.floor((n - 1) / 2)] + self.nums[math.ceil((n - 1) / 2)]) / 2


# 解法二 优先队列
class MedianFinder2:
    def __init__(self):
        """
        initialize your data structure here.
        """
        # 最大堆存储数据流中 值较小的一半元素（前有序数组）
        self.max_heap: List[int] = []
        # 最小堆存储数据流中 值较大的一半元素（后有序数组）
        self.min_heap: List[int] = []

    def addNum(self, num: int) -> None:
        # python 默认最小堆，所以构建最大堆时，将元素值取负
        # https://leetcode-cn.com/problems/find-median-from-data-stream/solution/you-xian-dui-lie-python-dai-ma-java-dai-ma-by-liwe/
        heapq.heappush(self.min_heap, -heapq.heappushpop(self.max_heap, -num))

        if len(self.min_heap) > len(self.max_heap):
            heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))

    def findMedian(self) -> float:
        if len(self.min_heap) < len(self.max_heap):
            return float(-self.max_heap[0])

        return (-self.max_heap[0] + self.min_heap[0]) / 2


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
