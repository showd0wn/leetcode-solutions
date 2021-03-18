# topics = ["广度优先搜索"]

from collections import deque
from typing import List, Deque, Tuple


class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        if not grid:
            return 0
        m = len(grid)
        n = len(grid[0])
        visited = [[False] * n for _ in range(m)]
        q: Deque[Tuple[int, int]] = deque()
        res = 0

        def bfs(i: int, j: int) -> int:
            q.append((i, j))
            visited[i][j] = True
            area = 0

            while q:
                x, y = q.popleft()
                area += 1
                for dx, dy in [[0, -1], [1, 0], [0, 1], [-1, 0]]:
                    nx = x + dx
                    ny = y + dy
                    if (
                        0 <= nx < m
                        and 0 <= ny < n
                        and grid[nx][ny]
                        and not visited[nx][ny]
                    ):
                        q.append((nx, ny))
                        visited[nx][ny] = True

            return area

        for i in range(m):
            for j in range(n):
                if grid[i][j] and not visited[i][j]:
                    res = max(res, bfs(i, j))
                    print(i, j, res)

        return res
