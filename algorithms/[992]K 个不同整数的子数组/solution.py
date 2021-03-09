# topics = ["滑动窗口", "哈希表"]

from collections import Counter
from typing import List, Dict


class Solution:
    def subarraysWithKDistinct(self, A: List[int], K: int) -> int:
        """
        近似题 904.水果成篮
        恰好包含 K 种不同整数 = 最多包含 k 种不同整数 - 最多包含 k - 1 种不同整数
        """
        return self.atMostK(A, K) - self.atMostK(A, K - 1)

    def atMostK(self, A: List[int], K: int) -> int:
        n = len(A)
        i = j = 0
        res = 0

        c: Dict[int, int] = Counter()

        while j < n:
            c[A[j]] += 1

            while len(c) > K:
                c[A[i]] -= 1
                if c[A[i]] == 0:
                    c.pop(A[i])
                i += 1

            j += 1
            # 新增的子数组个数（以 j 为右边界）为 j - i
            res += j - i

        return res
