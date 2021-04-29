# topics = ["堆"]

from typing import List
import heapq


class Solution:
    def maxEvents(self, events: List[List[int]]) -> int:
        """
        time O(Tlogn), space O(T), T 为时间点的上界, n 为数组长度
        """
        events.sort(reverse=True)
        h: List[int] = []
        ans = 0
        for i in range(1, 100001):
            while events and events[-1][0] == i:
                heapq.heappush(h, events.pop()[1])
            while h:
                cur = heapq.heappop(h)
                if cur >= i:
                    ans += 1
                    break
            if not events and not h:
                break
        return ans
