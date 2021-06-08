# topics = ["堆"]

from typing import List
import heapq


class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        """
        HEAP
        time O(nlogn), space O(n), n 为 stones 长度
        """
        hp: List[int] = []

        for stone in stones:
            heapq.heappush(hp, -1 * stone)

        while len(hp) > 1:
            x = heapq.heappop(hp)
            y = heapq.heappop(hp)
            if x < y:
                heapq.heappush(hp, x - y)

        return hp[0] * -1 if len(hp) else 0
