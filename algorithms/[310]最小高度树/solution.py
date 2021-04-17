# topics = ["树", "广度优先搜索"]

from collections import deque
from typing import Deque, Dict, List


class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        """
        最小高度树的根，一定是最长的「最短路径」的中点。所以解的个数一定为 1 或者 2。
        问题类似于「拓扑排序」，解法为「广度优先搜索」
        """
        if n == 1:
            return [0]

        # 邻接表
        d: Dict[int, List[int]] = {}
        # 记录各个顶点的度
        deg = [0] * n

        for i, j in edges:
            deg[i] += 1
            deg[j] += 1
            if i not in d:
                d.setdefault(i, [j])
            else:
                d[i].append(j)
            if j not in d:
                d.setdefault(j, [i])
            else:
                d[j].append(i)

        # 度为 1 的顶点加入队列
        q: Deque[int] = deque(i for (i, v) in enumerate(deg) if v == 1)
        # res 记录每次处理的顶点，最后一次处理的顶点即最小高度树的根
        res: List[int] = []

        while q:
            res = list(q)
            # 同时处理整个队列
            for i in range(len(q)):
                node = q.popleft()
                for v in d[node]:
                    deg[v] -= 1
                    if deg[v] == 1:
                        q.append(v)

        return res
