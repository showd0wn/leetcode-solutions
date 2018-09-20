class Solution:
    def setZeroes(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: void Do not return anything, modify matrix in-place instead.
        """
        firstRowZero, firstColZero = False, False
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if (matrix[i][j] == 0 and i != 0 and j != 0 ):
                    matrix[i][0] = 0
                    matrix[0][j] = 0
                elif matrix[i][j] == 0:
                    firstRowZero = True if i == 0 else firstRowZero
                    firstColZero = True if j == 0 else firstColZero

        for i in range(1, len(matrix)):
            for j in range(1, len(matrix[i])):
                if (matrix[0][j] == 0 or matrix[i][0] == 0): matrix[i][j] = 0

        if firstColZero:
            for i in range(len(matrix)): matrix[i][0] = 0

        if firstRowZero:
            for j in range(len(matrix[0])): matrix[0][j] = 0
