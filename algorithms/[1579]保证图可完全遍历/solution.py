# topics = ["图", "并查集"]

from typing import List


class UnionFind:
    def __init__(self, n: int):
        self.parent = [i for i in range(n)]
        self.rank = [1] * n
        self.count_num = n

    def union(self, i: int, j: int) -> bool:
        x, y = self.find(i), self.find(j)

        if x is y:
            return False

        if self.rank[x] <= self.rank[y]:
            self.parent[x] = y
        else:
            self.parent[y] = x

        if self.rank[x] == self.rank[y]:
            self.rank[y] += 1

        self.count_num -= 1

        return True

    def find(self, x: int) -> int:
        if self.parent[x] is not x:
            self.parent[x] = self.find(self.parent[x])

        return self.parent[x]


class Solution:
    def maxNumEdgesToRemove(self, n: int, edges: List[List[int]]) -> int:
        """
        Union Find
        time O(m·α(n)), space O(n), m 是数组 edges 的长度, α 是阿克曼函数的反函数
        """
        res = 0

        ufa = UnionFind(n)
        ufb = UnionFind(n)

        for edge in edges:
            edge[1] -= 1
            edge[2] -= 1

        for t, i, j in edges:
            if t == 3:
                if not ufa.union(i, j):
                    res += 1
                else:
                    ufb.union(i, j)

        for t, i, j in edges:
            if t == 1:
                if not ufa.union(i, j):
                    res += 1
            elif t == 2:
                if not ufb.union(i, j):
                    res += 1

        if ufa.count_num != 1 or ufb.count_num != 1:
            return -1

        return res
