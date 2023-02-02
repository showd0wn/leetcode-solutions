# topics = ["图", "广度优先搜索, "深度优先搜索"]

from typing import List, Set


class Solution:
    redGraph: List[Set[int]] = []

    blueGraph: List[Set[int]] = []

    redVisited: Set[int] = set()

    blueVisited: Set[int] = set()

    def buildGraph(self, n: int, edges: List[List[int]]) -> List[Set[int]]:
        """
        有向图-邻接表
        """
        graph: List[Set[int]] = [set() for _ in range(n)]

        for i, j in edges:
            graph[i].add(j)

        return graph

    def dfs(self, idx: int, type: int, deep: int, dist: List[int]) -> None:
        if type == 0:
            self.redVisited.add(idx)
            nodes = self.redGraph[idx]
            visited = self.blueVisited
        else:
            self.blueVisited.add(idx)
            nodes = self.blueGraph[idx]
            visited = self.redVisited

        for node in nodes:
            if dist[node] == -1:
                dist[node] = deep
            else:
                dist[node] = min(dist[node], deep)
            if node not in visited:
                self.dfs(node, 1 - type, deep + 1, dist)

    def shortestAlternatingPaths(
        self, n: int, redEdges: List[List[int]], blueEdges: List[List[int]]
    ) -> List[int]:
        self.redGraph = self.buildGraph(n, redEdges)
        self.blueGraph = self.buildGraph(n, blueEdges)

        self.redVisited = set()
        self.blueVisited = set()

        dist: List[int] = [0] + [-1] * (n - 1)

        self.dfs(0, 0, 1, dist)
        self.dfs(0, 1, 1, dist)

        return dist


s = Solution()

print(
    # [0,1,2,1,1]
    s.shortestAlternatingPaths(
        5,
        [[2, 2], [0, 1], [0, 3], [0, 0], [0, 4], [2, 1], [2, 0], [1, 4], [3, 4]],
        [[1, 3], [0, 0], [0, 3], [4, 2], [1, 0]],
    )
)
