# topics = ["数组", "数学"]

from typing import List


class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        """
        差分数组，区间两端进行操作以代替区间内操作
        """
        res = [0] * n
        for i, j, cnt in bookings:
            res[i - 1] += cnt
            if j < n:
                res[j] -= cnt

        for i in range(1, n):
            res[i] += res[i - 1]

        return res
