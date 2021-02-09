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
    def numSimilarGroups(self, strs: List[str]) -> int:
        n = len(strs)
        uf = UnionFind(n)

        for i in range(n):
            for j in range(i + 1, n):
                if self.isSimilar(strs[i], strs[j]):
                    uf.union(i, j)

        return uf.set_num

    def isSimilar(self, str1: str, str2: str) -> bool:
        if str1 == str2:
            return True
        if len(str1) != len(str2):
            return False

        n = len(str1)
        tmp: List[int] = []

        for i in range(n):
            if str1[i] != str2[i]:
                tmp.append(i)

        if len(tmp) != 2:
            return False

        return str1[tmp[0]] == str2[tmp[1]] and str1[tmp[1]] == str2[tmp[0]]
