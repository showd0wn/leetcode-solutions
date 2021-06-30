# topics = ["广度优先搜索"]

from typing import Deque, List, Tuple
from collections import deque


class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        """
        BFS
        time O(n^2), space O(n^2), n 为 board 边长
        """
        n = len(board)
        end = n * n

        q: Deque[int] = deque()
        q.append(1)
        visited = set([1])
        res = 0

        def getPos(idx: int) -> Tuple[int, int]:
            x = n - (idx - 1) // n - 1
            y = n - (idx - 1) % n - 1 if (idx - 1) // n % 2 else (idx - 1) % n
            return (x, y)

        while q:
            for _ in range(len(q)):
                idx = q.popleft()
                if idx == end:
                    return res
                for step in range(1, 7):
                    if (cur := idx + step) not in visited and cur <= end:
                        visited.add(cur)
                        x, y = getPos(cur)
                        next = board[x][y]
                        if next == -1:
                            q.append(cur)
                        elif next not in visited:
                            q.append(next)
            res += 1

        return -1
