# topics = ["数组"]

from typing import List
from math import ceil


class Solution:
    def shipWithinDays(self, weights: List[int], D: int) -> int:
        w = max(max(weights), ceil(sum(weights) / D))

        # 判断运载能力为 w 时，能否在 D 天内运输完成
        def helper(w: int) -> bool:
            total = day = 0
            for weight in weights:
                if total + weight > w:
                    total = weight
                    day += 1
                else:
                    total += weight
            return day + bool(total) <= D

        while True:
            if helper(w):
                return w
            w += 1
