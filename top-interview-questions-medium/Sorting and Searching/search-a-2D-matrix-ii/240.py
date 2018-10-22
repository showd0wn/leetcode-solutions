class Solution:
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        if not len(matrix): return False
        i, j = 0, len(matrix[0]) - 1

        while i < len(matrix) and j >= 0:
            if matrix[i][j] == target: return True
            if matrix[i][j] > target:
                j -= 1
            else:
                i += 1

        return False
