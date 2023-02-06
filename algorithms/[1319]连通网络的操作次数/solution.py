# topics = ["图", "广度优先搜索, "深度优先搜索"]

from collections import deque
from typing import List, Set


class Solution:
    def buildGraph(self, n: int, edges: List[List[int]]) -> List[Set[int]]:
        """
        无向图-邻接表
        """
        graph: List[Set[int]] = [set() for _ in range(n)]

        for i, j in edges:
            graph[i].add(j)
            graph[j].add(i)

        return graph

    def bfs(self, idx: int, visited: List[int], graph: List[Set[int]]) -> None:
        visited[idx] = 1
        queue = deque(graph[idx])

        while queue:
            cur = queue.popleft()
            if not visited[cur]:
                visited[cur] = 1
                queue.extend(graph[cur])

    def dfs(self, idx: int, visited: List[int], graph: List[Set[int]]) -> None:
        visited[idx] = 1
        for node in graph[idx]:
            if not visited[node]:
                self.dfs(node, visited, graph)

    def makeConnected(self, n: int, connections: List[List[int]]) -> int:
        """
        BFS / DFS
        time O(m + n), space O(m + n), m 为 connections 的长度
        """
        if len(connections) < n - 1:
            return -1

        graph = self.buildGraph(n, connections)

        # 连通分量数
        res = 0
        # 记录已遍历过的顶点
        visited = [0] * n

        for i in range(n):
            if not visited[i]:
                # 解法一 bfs
                # self.bfs(i, visited, graph)
                # 解法二 dfs
                self.dfs(i, visited, graph)
                res += 1

        return res - 1
