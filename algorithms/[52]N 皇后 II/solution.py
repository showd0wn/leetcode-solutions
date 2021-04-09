# topics = ["回溯算法"]

from typing import List


class Solution:
    def totalNQueens(self, n: int) -> int:
        res = 0
        path: List[int] = []

        def backtrack(f: int = 0) -> None:
            nonlocal res
            if f == n:
                res += 1
                return
            for i in range(n):
                if is_valid(i):
                    path.append(i)
                    backtrack(f + 1)
                    path.pop()

        # 判断是否互不攻击
        def is_valid(i: int) -> bool:
            if not path:
                return True
            for idx, col in enumerate(path):
                if i == col or abs(i - col) == abs(len(path) - idx):
                    return False
            return True

        backtrack()

        return res
