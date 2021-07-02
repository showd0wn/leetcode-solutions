# topics = ["数组", "贪心算法"]

from typing import List


class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        """
        排序（贪心）
        time O(nlong), space O(logn), n 为 costs 长度
        """
        costs.sort()

        preSum = 0
        res = 0
        for c in costs:
            preSum += c
            if preSum > coins:
                return res
            res += 1

        return len(costs)
