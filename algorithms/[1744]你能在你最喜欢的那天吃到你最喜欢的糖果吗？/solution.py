# topics = ["数组"]

from typing import List


class Solution:
    def canEat(self, candiesCount: List[int], queries: List[List[int]]) -> List[bool]:
        """
        前缀和
        time O(n + q), space(n), n 和 q 分别为 candiesCount 和 queries 长度
        """
        preSum = [0]
        for count in candiesCount:
            preSum.append(preSum[-1] + count)

        res: List[bool] = []
        for t, d, c in queries:
            min = 1 * (d + 1)
            max = c * (d + 1)
            res.append(not (min > preSum[t + 1] or max < preSum[t] + 1))

        return res
