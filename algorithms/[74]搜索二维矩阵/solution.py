# topics = ["数组", "二分查找"]

import bisect
from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m = len(matrix)
        # 若已存在，插入点会在已存在元素右侧
        idx = bisect.bisect([matrix[i][0] for i in range(m)], target)

        return idx != 0 and target in matrix[idx - 1]
