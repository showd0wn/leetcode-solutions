from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        i, j = len(matrix) - 1, 0

        while i >= 0 and j < len(matrix[i]):
            val = matrix[i][j]
            if val == target:
                return True
            if val > target:
                i -= 1
            else:
                j += 1

        return False
