# topics = ["数学"]

from typing import List


class Solution:
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        [x0, y0] = coordinates[0]
        [x1, y1] = coordinates[1]

        for [x, y] in coordinates:
            print(x, y)
            # 利用向量共线
            # 参考 https://leetcode-cn.com/problems/check-if-it-is-a-straight-line/solution/jin-liang-bu-yao-yong-pan-duan-xie-lu-sh-9r4r/
            if (x1 - x0) * (y - y0) - (y1 - y0) * (x - x0):
                return False

        return True
