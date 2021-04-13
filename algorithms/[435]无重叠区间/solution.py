# topics = ["贪心算法"]

from typing import List
from operator import itemgetter


class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0

        # 按右端点从小到大即可
        intervals.sort(key=itemgetter(1))

        n = len(intervals)
        pre = intervals[0]
        res = 1

        for i in range(1, n):
            if intervals[i][0] >= pre[1]:
                pre = intervals[i]
                res += 1

        return n - res
