# topics = ["图", "并查集"]

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
    def minimumEffortPath(self, heights: List[List[int]]) -> int:
        n, m = len(heights), len(heights[0])
        edges: List[List[int]] = []

        for i in range(n):
            for j in range(m):
                start = i * m + j
                if i + 1 < n:
                    end = (i + 1) * m + j
                    height = abs(heights[i + 1][j] - heights[i][j])
                    edges.append([start, end, height])
                if j + 1 < m:
                    end = i * m + j + 1
                    height = abs(heights[i][j + 1] - heights[i][j])
                    edges.append([start, end, height])

        edges.sort(key=lambda ele: ele[2])

        uf = UnionFind(n * m)
        for start, end, height in edges:
            uf.union(start, end)
            if uf.find(0) == uf.find(n * m - 1):
                return height

        return 0
