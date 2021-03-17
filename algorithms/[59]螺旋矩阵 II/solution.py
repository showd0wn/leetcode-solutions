# topics = ["数组"]

from typing import List


class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        res = [[n * n] * n for _ in range(n)]
        num = 1
        top = 0
        right = n - 1
        bottom = n - 1
        left = 0

        while top < bottom and left < right:
            for i in range(left, right):
                res[top][i] = num
                num += 1

            for i in range(top, bottom):
                res[i][right] = num
                num += 1

            for i in range(left + 1, right + 1)[::-1]:
                res[bottom][i] = num
                num += 1

            for i in range(top + 1, bottom + 1)[::-1]:
                res[i][left] = num
                num += 1

            top += 1
            right -= 1
            bottom -= 1
            left += 1

        return res
