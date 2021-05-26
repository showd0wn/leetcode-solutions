# topics = ["数组", "堆"]

from typing import List
import heapq


class Solution:
    def kthLargestValue(self, matrix: List[List[int]], k: int) -> int:
        """
        二维异或前缀和 & 堆
        time O(mnlogk), space O(mn), m 和 n 分别为二维数组的行、列数
        """
        m, n = len(matrix), len(matrix[0])
        pre = [[0] * (n + 1) for _ in range(m + 1)]
        # 最小堆
        heap: List[int] = []

        for i in range(1, m + 1):
            for j in range(1, n + 1):
                pre[i][j] = (
                    pre[i - 1][j]
                    ^ pre[i][j - 1]
                    ^ pre[i - 1][j - 1]
                    ^ matrix[i - 1][j - 1]
                )
                if len(heap) < k:
                    heapq.heappush(heap, pre[i][j])
                else:
                    heapq.heappushpop(heap, pre[i][j])

        return heap[0]
