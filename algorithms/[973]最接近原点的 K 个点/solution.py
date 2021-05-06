# topics = ["堆"]

import heapq
from typing import List


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        """
        heap
        time O(nlogk), space O(k), n 为 points 的长度
        """
        q = [(x ** 2 + y ** 2, i) for i, (x, y) in enumerate(points)]
        # 转化为小根堆
        heapq.heapify(q)

        return [points[i] for _, i in heapq.nsmallest(k, q)]

    def kClosest2(self, points: List[List[int]], k: int) -> List[List[int]]:
        """
        heap
        time O(nlogk), space O(k), n 为 points 的长度
        """
        q = [(-(x ** 2) - y ** 2, i) for i, (x, y) in enumerate(points[:k])]
        # 维护长度为 k 的小根堆
        heapq.heapify(q)

        n = len(points)
        for i in range(k, n):
            x, y = points[i]
            dist = -(x ** 2) - y ** 2
            heapq.heappushpop(q, (dist, i))

        ans = [points[i] for _, i in q]
        return ans
