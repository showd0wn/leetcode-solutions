# topics = ["数学"]

from typing import List


class Solution:
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        """
        判断向量共线
        time O(n), space O(1), n 为数组长度
        """
        [x0, y0] = coordinates[0]
        [x1, y1] = coordinates[1]

        for [x, y] in coordinates:
            if (x1 - x0) * (y - y0) - (y1 - y0) * (x - x0):
                return False

        return True
