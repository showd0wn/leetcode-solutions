# topics = ["数组"]

from typing import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        """
        近似题 435.无重叠区间
        """
        # 依次按左、右端点从小到大排序
        intervals.sort()

        n = len(intervals)
        right = intervals[0][1]
        res = [intervals[0]]

        for i in range(1, n):
            if intervals[i][0] > right:
                right = intervals[i][1]
                res.append(intervals[i])
            else:
                right = max(right, intervals[i][1])
                res[-1][1] = right

        return res
