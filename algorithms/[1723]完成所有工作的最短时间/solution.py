# topics = ["回溯算法"]

from sys import maxsize
from typing import List


class Solution:
    def minimumTimeRequired(self, jobs: List[int], k: int) -> int:
        """
        回溯算法 + 优化
        time O(k^n), space O(k), n 为 jobs 长度
        """
        n = len(jobs)
        path = [0] * k
        res = maxsize

        def backtrack(s: int = 0, uesd: int = 0, maxt: int = 0) -> None:
            """
            s 表示当前处理的工作索引
            uesd 表示当前已分配的工人数量
            maxt 表示当前完成所有工作的最短时间
            """
            nonlocal res

            if maxt > res:
                return

            if s == n:
                res = maxt
                return

            if uesd < k:
                path[uesd] = jobs[s]
                backtrack(s + 1, uesd + 1, max(maxt, path[uesd]))
                path[uesd] = 0

            for i in range(uesd):
                path[i] += jobs[s]
                backtrack(s + 1, uesd, max(maxt, path[i]))
                path[i] -= jobs[s]

        backtrack()

        return res
