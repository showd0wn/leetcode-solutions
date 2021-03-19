# topics = ["图", "拓扑排序", "广度优先搜索"]

from collections import deque
from typing import Dict, List


# BFS 实现
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # 邻接表
        edges: Dict[int, List[int]] = {}
        # 所有顶点的入度表
        indeg = [0] * numCourses

        for i, j in prerequisites:
            indeg[i] += 1
            if j not in edges:
                edges.setdefault(j, [i])
            else:
                edges[j].append(i)

        # 入度为 0 的顶点加入队列
        q = deque(i for (i, v) in enumerate(indeg) if v == 0)
        res = 0

        while q:
            node = q.popleft()
            for v in edges.get(node, []):
                indeg[v] -= 1
                if indeg[v] == 0:
                    q.append(v)
            res += 1

        return res == numCourses
