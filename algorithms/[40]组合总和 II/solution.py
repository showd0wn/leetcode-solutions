# topics = ["回溯算法"]

from typing import List


class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        n = len(candidates)
        res: List[List[int]] = []
        path: List[int] = []

        def backtrack(idx: int = 0) -> None:
            total = sum(path)
            if total == target:
                res.append(path[:])
                return
            for i in range(idx, n):
                if total + candidates[i] > target:
                    return
                # 【重要】保证不重复，需要先排序！
                if i > idx and candidates[i] == candidates[i - 1]:
                    continue
                path.append(candidates[i])
                backtrack(i + 1)
                path.pop()

        backtrack()

        return res
