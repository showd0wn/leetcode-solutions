# topics = ["图", "最短路径", "广度优先搜索"]

import sys
import heapq
from typing import List, Set, Tuple


class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        """
        类似 Dijkstra 算法求单源最短路径，这里「最短路径」的定义是其经过的所有边权的最大值
        广度优先搜索 + 优先队列
        """
        n = len(grid)
        # 记录左上角到各点的最短路径
        dist = [0] + [sys.maxsize] * (n * n - 1)
        pq: List[Tuple[int, int, int]] = [(0, 0, 0)]
        visited: Set[int] = set()

        while pq:
            d, x, y = heapq.heappop(pq)
            iden = x * n + y
            # 排除已遍历的点
            if iden in visited:
                continue
            # 遍历到右下角，退出循环
            if (x, y) == (n - 1, n - 1):
                break
            visited.add(iden)
            for nx, ny in [(x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)]:
                if (
                    0 <= nx < n
                    and 0 <= ny < n
                    and max(d, grid[x][y], grid[nx][ny]) <= dist[nx * n + ny]
                ):
                    # 松弛
                    dist[nx * n + ny] = max(d, grid[x][y], grid[nx][ny])
                    heapq.heappush(pq, (dist[nx * n + ny], nx, ny))

        return dist[n * n - 1]
