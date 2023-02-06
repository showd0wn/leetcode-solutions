# topics = ["图", "广度优先搜索"]

from collections import deque
from typing import List, Set


class Solution:
    def buildGraph(self, n: int, edges: List[List[int]]) -> List[Set[int]]:
        """
        有向图-邻接表
        """
        graph: List[Set[int]] = [set() for _ in range(n)]

        for i, j in edges:
            graph[i].add(j)

        return graph

    def shortestAlternatingPaths(
        self, n: int, redEdges: List[List[int]], blueEdges: List[List[int]]
    ) -> List[int]:
        """
        time O(n + r + b), space O(n + r + b), r 和 b 分别为红色边和蓝色边的数目
        """
        redGraph = self.buildGraph(n, redEdges)
        blueGraph = self.buildGraph(n, blueEdges)

        redVisited = set()
        blueVisited = set()

        dist = [-1] * n
        node, distance = [0, 0]
        queue = deque(
            [
                (node, distance, redVisited, redGraph, blueVisited, blueGraph),
                (node, distance, blueVisited, blueGraph, redVisited, redGraph),
            ]
        )

        while queue:
            [idx, dis, visited, graph, nextVisited, nextGraph] = queue.popleft()
            if idx not in visited:
                visited.add(idx)
                if dist[idx] == -1:
                    dist[idx] = dis
                for next in graph[idx]:
                    queue.append(
                        (next, dis + 1, nextVisited, nextGraph, visited, graph)
                    )

        return dist
