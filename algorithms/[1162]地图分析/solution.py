# topics = ["图", "最短路径", "广度优先搜索"]

import sys
import heapq
from collections import deque
from typing import Deque, List, Set, Tuple


class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
        """
        BFS
        time O(n^4), space O(n^2), n 为网格宽/高, 超时
        """
        n = len(grid)
        res = -1

        def bfs(i: int, j: int) -> int:
            visited: List[List[bool]] = [[False] * n for _ in range(n)]
            q: Deque[Tuple[int, int, int]] = deque()
            q.append((i, j, 0))

            while q:
                x, y, d = q.popleft()
                visited[x][y] = True

                if grid[x][y] == 1:
                    return d

                for nx, ny in [(x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)]:
                    if n > nx >= 0 and n > ny >= 0 and not visited[nx][ny]:
                        q.append((nx, ny, d + 1))

            return -1

        for i in range(n):
            for j in range(n):
                # 对每一个海洋区域进行广度优先遍历，求最近陆地区域
                if grid[i][j] == 0:
                    res = max(res, bfs(i, j))

        return res

    def maxDistance2(self, grid: List[List[int]]) -> int:
        """
        【最短路径问题】 Dijkstra 算法（广度优先遍历 + 优先队列）
        这里需要先将「多源最短路径问题」转化成「单源最短路径问题」
        time O(n^2), space O(n^2), n 为网格宽/高
        """
        n = len(grid)
        # 记录超级源（到各个陆地区域的权重为 0）到各点的最短路径
        dist = [[sys.maxsize] * n for _ in range(n)]
        pq: List[Tuple[int, int, int]] = []
        visited: Set[int] = set()
        res = -1

        # 将所有陆地区域加入优先队列，原问题转化为超级源的单源最短路径问题
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1:
                    # 超级源到陆地区域的最短路径为 0
                    dist[i][j] = 0
                    heapq.heappush(pq, (dist[i][j], i, j))

        # 广度优先搜索，求超级源的单源最短路径
        while pq:
            d, x, y = heapq.heappop(pq)
            iden = x * n + y
            # 排除已遍历的点
            if iden in visited:
                continue
            visited.add(iden)
            for nx, ny in [(x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)]:
                if 0 <= nx < n and 0 <= ny < n and d + 1 <= dist[nx][ny]:
                    # 松弛
                    dist[nx][ny] = d + 1
                    heapq.heappush(pq, (d + 1, nx, ny))

        # 求到各个点（海洋区域）最短路径的最大值
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 0:
                    res = max(res, dist[i][j])

        return res if res != sys.maxsize else -1
