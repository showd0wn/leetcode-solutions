# topics = ["图", "并查集", "二分查找", "深度优先搜索", "广度优先搜索", "最短路径", "堆"]

from typing import List


class UnionFind:
    def __init__(self, n: int):
        self.parent = [i for i in range(n)]
        self.rank = [1] * n

    def union(self, i: int, j: int) -> None:
        x, y = self.find(i), self.find(j)

        if self.rank[x] <= self.rank[y]:
            self.parent[x] = y
        else:
            self.parent[y] = x

        if self.rank[x] == self.rank[y] and x != y:
            self.rank[y] += 1

    def find(self, x: int) -> int:
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])

        return self.parent[x]


class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        n = len(grid)
        edges: List[List[int]] = []

        for i in range(n):
            for j in range(n):
                start = i * n + j
                if i + 1 < n:
                    end = (i + 1) * n + j
                    height = max(grid[i + 1][j], grid[i][j])
                    edges.append([start, end, height])
                if j + 1 < n:
                    end = i * n + j + 1
                    height = max(grid[i][j + 1], grid[i][j])
                    edges.append([start, end, height])

        edges.sort(key=lambda ele: ele[2])

        uf = UnionFind(n * n)
        for start, end, value in edges:
            uf.union(start, end)
            if uf.find(0) == uf.find(n * n - 1):
                return value

        return 0
