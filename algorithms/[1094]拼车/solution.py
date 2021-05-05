# topics = ["数组", "贪心算法"]

from typing import List, Tuple


class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        """
        差分统计
        time O(m + n), space O(n), m 和 n 分别为数组 capacity 和数组 trips 的长度
        """
        stop: List[Tuple[int, int]] = []
        for n, s, e in trips:
            stop.append((s, n))
            stop.append((e, -n))

        # 升序
        stop.sort()

        for _, count in stop:
            capacity -= count
            if capacity < 0:
                return False

        return True
