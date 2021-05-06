# topics = ["哈希表"]

import collections
from typing import List, Counter


class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        """
        Hash Table
        time O(mn), space O(mn), m 和 n 分别为砖墙的高和平均宽
        """
        m = len(wall)
        # 计数器，记录所有砖块间隔出现的次数
        c: Counter[int] = collections.Counter()

        for w in wall:
            presum = 0
            for v in w[:-1]:
                presum += v
                c[presum] += 1

        if not c:
            return m

        _, most = c.most_common(1)[0]

        return m - most
