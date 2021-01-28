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

        # 如果深度相同且根节点不同，则新的根节点的深度+1
        if self.rank[x] == self.rank[y] and x is not y:
            self.rank[y] += 1

    def find(self, x: int) -> int:
        if self.parent[x] is not x:
            self.parent[x] = self.find(self.parent[x])

        return self.parent[x]


class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        uf = UnionFind(n)

        for i in range(n):
            for j in range(i + 1, n):
                if isConnected[i][j] == 1:
                    uf.union(i, j)

        res = [val for idx, val in enumerate(uf.parent) if idx == val]
        return len(res)
