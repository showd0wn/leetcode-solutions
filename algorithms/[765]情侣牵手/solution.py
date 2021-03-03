# topics = ["并查集"]

from typing import List


class UnionFind:
    def __init__(self, n: int):
        self.parent = [i for i in range(n)]
        self.rank = [1] * n
        self.set_num = n

    def union(self, i: int, j: int) -> None:
        x, y = self.find(i), self.find(j)

        if x is y:
            return

        if self.rank[x] <= self.rank[y]:
            self.parent[x] = y
        else:
            self.parent[y] = x

        if self.rank[x] == self.rank[y]:
            self.rank[y] += 1

        self.set_num -= 1

    def find(self, x: int) -> int:
        if self.parent[x] is not x:
            self.parent[x] = self.find(self.parent[x])

        return self.parent[x]


class Solution:
    def minSwapsCouples(self, row: List[int]) -> int:
        n = len(row)
        uf = UnionFind(n // 2)

        for i in range(0, n, 2):
            uf.union(row[i] // 2, row[i + 1] // 2)

        # 至少交换的次数 = 所有情侣的对数 - 并查集里连通分量的个数
        return n // 2 - uf.set_num
