# topics = ["图", "最小生成树"]

from typing import List, Tuple


class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        """
        【最小生成树】 Prim 算法（贪心）
        【参考】 https://blog.csdn.net/luoshixian099/article/details/51908175
        time O(n^2), space O(n^2), n 为节点数
        """
        # 所有顶点数
        n = len(points)
        # 最小总费用
        min_cost = 0
        # 记录加入最小生成树中的顶点的索引（以第一个点为初始）
        u = [0]
        # 记录所有顶点到最小生成树的最小费用（曼哈顿距离）
        v = [self.get_hamanton_dis(points[0], points[i]) for i in range(n)]

        while len(u) != n:
            # 下一个加入最小生成树的顶点的费用和索引
            next_val, next_idx = self.get_min(v)
            min_cost += next_val
            u.append(next_idx)

            # 更新最小费用数组
            for idx, val in enumerate(v):
                v[idx] = min(val, self.get_hamanton_dis(points[idx], points[next_idx]))

        return min_cost

    def get_hamanton_dis(self, p1: List[int], p2: List[int]) -> int:
        """
        求两点之间的哈曼顿距离
        """
        x1, y1 = p1
        x2, y2 = p2
        return abs(x1 - x2) + abs(y1 - y2)

    def get_min(self, list: List[int]) -> Tuple[int, int]:
        """
        求数组中的最小非 0 值及索引
        """
        min_val = min([val for val in list if val])
        min_idx = list.index(min_val)
        return (min_val, min_idx)
