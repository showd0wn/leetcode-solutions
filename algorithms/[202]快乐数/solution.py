# topics = ["哈希表"]

from typing import Set


class Solution:
    def isHappy(self, n: int) -> bool:
        history: Set[int] = set()

        while n not in history:
            history.add(n)
            m = 0
            while n:
                m += (n % 10) ** 2
                n = n // 10

            if m == 1:
                return True
            else:
                n = m

        return False
