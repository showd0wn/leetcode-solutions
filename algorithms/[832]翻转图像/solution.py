# topics = ["数组"]

from typing import List


class Solution:
    def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:
        n = len(A)
        for i in range(n):
            for j in range((n + 1) // 2):
                # 遍历一次
                A[i][j], A[i][n - 1 - j] = 1 - A[i][n - 1 - j], 1 - A[i][j]

        return A
