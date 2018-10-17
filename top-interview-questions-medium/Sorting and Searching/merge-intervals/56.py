# Definition for an interval.
# class Interval:
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e


class Solution:
    def merge(self, intervals):
        """
        :type intervals: List[Interval]
        :rtype: List[Interval]
        """
        if not len(intervals): return []
        intervals.sort(key=lambda ele: ele.start)
        result = [intervals[0]]
        for i in range(1, len(intervals)):
            curr = intervals[i]
            last = result[len(result) - 1]
            if curr.start > last.end:
                result.append(curr)
            elif curr.end >= last.end:
                last.end = curr.end

        return result
