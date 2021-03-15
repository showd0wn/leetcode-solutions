# topics = ["数组"]

from typing import List


class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        top = 0
        right = len(matrix[0]) - 1
        down = len(matrix) - 1
        left = 0

        res: List[int] = []

        while top < down and left < right:
            for j in range(left, right + 1):
                res.append(matrix[top][j])

            for i in range(top + 1, down):
                res.append(matrix[i][right])

            for j in range(left, right + 1)[::-1]:
                res.append(matrix[down][j])

            for i in range(top + 1, down)[::-1]:
                res.append(matrix[i][left])

            top += 1
            right -= 1
            down -= 1
            left += 1

        if top == down and left == right:
            res.append(matrix[top][left])
        elif top == down:
            for j in range(left, right + 1):
                res.append(matrix[top][j])
        elif left == right:
            for i in range(top, down + 1):
                res.append(matrix[i][left])

        return res

    def spiralOrder2(self, matrix: List[List[int]]) -> List[int]:
        res: List[int] = []
        while matrix:
            res += matrix.pop(0)
            matrix = list(zip(*matrix))[::-1]
        return res
