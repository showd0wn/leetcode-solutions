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

        # 如果深度相同且根节点不同，则新的根节点的深度+1
        if self.rank[x] == self.rank[y] and x is not y:
            self.rank[y] += 1

        self.set_num -= 1

    def find(self, x: int) -> int:
        if self.parent[x] is not x:
            self.parent[x] = self.find(self.parent[x])

        return self.parent[x]


class Solution:
    def regionsBySlashes(self, grid: List[str]) -> int:
        """
        Union Find
        time O(n^2logn), space O(n^2), n 为 grid 的长度
        """
        # 把一个单元格分割成逻辑上的 4 个部分，0 ~ 3 分别为左上下右
        def get_pos(row: int, col: int, id: int) -> int:
            return (row * n + col) * 4 + id

        n = len(grid)
        uf = UnionFind(n ** 2 * 4)

        for i in range(n):
            for j in range(n):
                char = grid[i][j]
                if i > 0:
                    uf.union(get_pos(i - 1, j, 2), get_pos(i, j, 1))
                if j > 0:
                    uf.union(get_pos(i, j - 1, 3), get_pos(i, j, 0))
                if char == '/':
                    uf.union(get_pos(i, j, 0), get_pos(i, j, 1))
                    uf.union(get_pos(i, j, 2), get_pos(i, j, 3))
                if char == '\\':
                    uf.union(get_pos(i, j, 1), get_pos(i, j, 3))
                    uf.union(get_pos(i, j, 0), get_pos(i, j, 2))
                if char == ' ':
                    uf.union(get_pos(i, j, 0), get_pos(i, j, 1))
                    uf.union(get_pos(i, j, 1), get_pos(i, j, 2))
                    uf.union(get_pos(i, j, 2), get_pos(i, j, 3))

        return uf.set_num
