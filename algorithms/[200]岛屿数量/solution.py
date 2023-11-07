# topics = ["深度优先搜索", "广度优先搜索"]

from typing import List, Tuple, Deque
from collections import deque


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        m, n = len(grid), len(grid[0])
        visited = [[False] * n for _ in range(m)]
        direction = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        res = 0

        def dfs(i: int, j: int) -> None:
            visited[i][j] = True
            for cx, cy in direction:
                nx, ny = i + cx, j + cy
                if (
                    0 <= nx < m
                    and 0 <= ny < n
                    and grid[nx][ny] == '1'
                    and not visited[nx][ny]
                ):
                    dfs(nx, ny)

        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1' and not visited[i][j]:
                    dfs(i, j)
                    res += 1

        return res

    def numIslands2(self, grid: List[List[str]]) -> int:
        m, n = len(grid), len(grid[0])
        visited = [[False] * n for _ in range(m)]
        direction = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        q: Deque[Tuple[int, int]] = deque()
        res = 0

        def bfs() -> None:
            while q:
                i, j = q.popleft()
                for cx, cy in direction:
                    nx, ny = i + cx, j + cy
                    if (
                        0 <= nx < m
                        and 0 <= ny < n
                        and grid[nx][ny] == '1'
                        and not visited[nx][ny]
                    ):
                        # 在加入队列时，标记为已访问
                        visited[nx][ny] = True
                        q.append((nx, ny))

        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1' and not visited[i][j]:
                    # 在加入队列时，标记为已访问
                    visited[i][j] = True
                    q.append((i, j))
                    bfs()
                    res += 1

        return res
