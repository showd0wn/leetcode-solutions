# topics = ["回溯算法"]

from typing import List


class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        res: List[List[int]] = []
        path: List[int] = []

        def backtrack(idx: int = 1) -> None:
            size = len(path)
            if size == k:
                res.append(path[:])
                return
            for i in range(idx, n + 1):
                if size > k:
                    return
                path.append(i)
                backtrack(i + 1)
                path.pop()

        backtrack()

        return res
