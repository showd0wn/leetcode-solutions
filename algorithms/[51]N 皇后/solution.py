# topics = ["回溯算法"]

from typing import List


class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        cols: List[List[int]] = []
        path: List[int] = []

        def backtrack(f: int = 0) -> None:
            if f == n:
                cols.append([*path])
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

        # 转换成放置方案
        m = len(cols)
        res: List[List[str]] = [[''] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                for p in range(n):
                    res[i][j] += 'Q' if p == cols[i][j] else '.'

        return res
