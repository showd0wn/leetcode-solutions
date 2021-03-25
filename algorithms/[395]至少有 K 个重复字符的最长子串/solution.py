# topics = ["分治", "递归"]

import sys
from collections import Counter


class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        cnt = Counter(s)

        min_times, max_times = sys.maxsize, 0
        for times in cnt.values():
            min_times = min(min_times, times)
            max_times = max(max_times, times)

        # 递归终止条件
        if min_times >= k:
            return len(s)
        if max_times < k:
            return 0

        res = 0
        i = 0
        for idx, ch in enumerate(s):
            if cnt[ch] < k:
                res = max(res, self.longestSubstring(s[i:idx], k))
                i = idx + 1

        return max(res, self.longestSubstring(s[i:], k))

    def longestSubstring2(self, s: str, k: int) -> int:
        n = len(s)
        if n < k:
            return 0

        for c in set(s):
            if s.count(c) < k:
                return max(self.longestSubstring(t, k) for t in s.split(c))

        return n
