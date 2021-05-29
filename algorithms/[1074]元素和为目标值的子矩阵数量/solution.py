# topics = ["数组"]

from typing import List
from collections import Counter


class Solution:
    def numSubmatrixSumTarget(self, matrix: List[List[int]], target: int) -> int:
        """
        二维前缀和（TLE）
        time O(m^2 * n^2), space(m * n)
        """
        m, n = len(matrix), len(matrix[0])
        preSum = [[0] * (n + 1) for _ in range(m + 1)]
        res = 0

        # 计算二维前缀和
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                preSum[i][j] = (
                    preSum[i][j - 1]
                    + preSum[i - 1][j]
                    - preSum[i - 1][j - 1]
                    + matrix[i - 1][j - 1]
                )

        # [i, j] 为子矩阵左上角， [p, q] 为子矩阵右下角
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                for p in range(i, m + 1):
                    for q in range(j, n + 1):
                        if (
                            preSum[p][q]
                            + preSum[i - 1][j - 1]
                            - preSum[i - 1][q]
                            - preSum[p][j - 1]
                            == target
                        ):
                            res += 1

        return res

    def numSubmatrixSumTarget2(self, matrix: List[List[int]], target: int) -> int:
        """
        二维前缀和 & 哈希表
        time O(m^2 * n), space(m * n)
        """
        m, n = len(matrix), len(matrix[0])
        preSum = [[0] * (n + 1) for _ in range(m + 1)]
        res = 0

        # 计算二维前缀和
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                preSum[i][j] = (
                    preSum[i][j - 1]
                    + preSum[i - 1][j]
                    - preSum[i - 1][j - 1]
                    + matrix[i - 1][j - 1]
                )

        # i, j, r 分别为上下右边界
        for i in range(1, m + 1):
            for j in range(i, m + 1):
                c = Counter([0])
                for r in range(1, n + 1):
                    cur = preSum[j][r] - preSum[i - 1][r]
                    if cur - target in c:
                        res += c[cur - target]
                    c[cur] = c[cur] + 1

        return res
