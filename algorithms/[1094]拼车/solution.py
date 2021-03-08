# topics = ["数组", "贪心算法"]

from typing import List, Tuple


class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
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
