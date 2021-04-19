# topics = ["广度优先搜索"]

from collections import deque
from typing import Deque, List


class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        n = len(graph)
        q: Deque[int] = deque()
        # 记录每个顶点所在子集（1 或者 2）, 初始时为 0
        id = [0] * n

        while q or id.count(0):
            if not q:
                i = id.index(0)
                id[i] = 1
                q.append(i)

            node = q.popleft()
            next = 2 if id[node] == 1 else 1

            for neighbor in graph[node]:
                if not id[neighbor]:
                    id[neighbor] = next
                    q.append(neighbor)
                elif id[neighbor] != next:
                    return False

        return True
