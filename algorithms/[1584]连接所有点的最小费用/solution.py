from typing import List, Tuple


class Solution:
    # 【最小生成树问题】 Prim 算法
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
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

    # 求两点之间的哈曼顿距离
    def get_hamanton_dis(self, p1: List[int], p2: List[int]) -> int:
        x1, y1 = p1
        x2, y2 = p2
        return abs(x1 - x2) + abs(y1 - y2)

    # 求数组中的最小非 0 值及索引
    def get_min(self, list: List[int]) -> Tuple[int, int]:
        min_val = min([val for val in list if val])
        min_idx = list.index(min_val)
        return (min_val, min_idx)
