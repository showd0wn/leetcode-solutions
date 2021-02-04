from typing import List
import heapq


class Solution:
    # 利用最小堆 heapq，思路同 ./solution.ts 解法二
    def maxEvents(self, events: List[List[int]]) -> int:
        events.sort(reverse=True)
        h = []
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
