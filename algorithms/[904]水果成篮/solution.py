# topics = ["滑动窗口", "哈希表"]

from collections import Counter
from typing import Dict, List


class Solution:
    def totalFruit(self, tree: List[int]) -> int:
        n = len(tree)
        i = j = 0
        res = 0

        count: Dict[int, int] = Counter()

        while j < n:
            count[tree[j]] += 1

            while len(count) > 2:
                res = max(res, j - i)
                i += 1
                count[tree[i - 1]] -= 1
                if count[tree[i - 1]] == 0:
                    count.pop(tree[i - 1])
            j += 1

        return max(res, j - i)
