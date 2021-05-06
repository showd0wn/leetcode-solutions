# topics = ["哈希表"]

from typing import List


class Solution:
    def prisonAfterNDays(self, cells: List[int], n: int) -> List[int]:
        """
        Iterate
        time O(2^N), space O(2^N * N), N 为监狱房间的个数
        """
        m = len(cells)
        dp: List[List[int]] = []

        while True:
            last = dp[-1] if dp else cells
            next: List[int] = [0] * m
            for i in range(m):
                if i == 0 or i == m - 1:
                    next[i] = 0
                elif last[i - 1] ^ last[i + 1] == 0:
                    next[i] = 1
                else:
                    next[i] = 0
            if dp and next == dp[0]:
                break
            dp.append(next)

        return dp[(n % len(dp)) - 1]
