# topics = ["深度优先搜索", "广度优先搜索"]

from typing import List, Tuple, Deque
from collections import deque


class Solution:
    def countSubIslands(self, grid1: List[List[int]], grid2: List[List[int]]) -> int:
        """
        BFS
        time O(mn), space O(mn), m 和 n 为 grid 长宽
        """
        m, n = len(grid1), len(grid1[0])
        direction = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        q: Deque[Tuple[int, int]] = deque()

        def bfs() -> bool:
            flag = True
            while q:
                i, j = q.popleft()
                if grid1[i][j] == 0:
                    flag = False
                for cx, cy in direction:
                    nx, ny = i + cx, j + cy
                    if 0 <= nx < m and 0 <= ny < n and grid2[nx][ny] == 1:
                        q.append((nx, ny))
                        grid2[nx][ny] = 0  # 避免重复遍历

            return flag

        res = 0
        for i in range(m):
            for j in range(n):
                if grid2[i][j] == 1:
                    q.append((i, j))
                    grid2[i][j] = 0  # 避免重复遍历
                    res += bfs()

        return res
