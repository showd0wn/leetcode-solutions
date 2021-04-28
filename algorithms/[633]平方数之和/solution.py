# topics = ["数学"]

from typing import Set


class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        """
        time O(sqrt(c)), space O(sqrt(c))
        """
        # 这里使用哈希表没有太大意义
        s: Set[int] = set()

        for i in range(c + 1):
            if i * i > c:
                break
            s.add(i * i)

        for t in s:
            if c - t in s:
                return True

        return False
