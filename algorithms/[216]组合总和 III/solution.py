# topics = ["回溯算法"]

from typing import List


class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        res: List[List[int]] = []
        path: List[int] = []

        def backtrack(idx: int = 1) -> None:
            size, total = len(path), sum(path)
            if total == n and size == k:
                res.append(path[:])
                return
            if size == k:
                return
            for i in range(idx, 10):
                if total + i > n:
                    return
                path.append(i)
                backtrack(i + 1)
                path.pop()

        backtrack()

        return res
