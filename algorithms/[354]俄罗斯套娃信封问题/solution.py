# topics = ["贪心算法", "二分查找"]

import bisect
from typing import List


class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        envelopes.sort(key=lambda x: (x[0], -x[1]))

        # 贪心 + 二分查找，求最长递增子序列
        d: List[int] = []
        for _, h in envelopes:
            if not d or h > d[-1]:
                d.append(h)
            else:
                idx = bisect.bisect_left(d, h)
                d[idx] = h

        return len(d)
