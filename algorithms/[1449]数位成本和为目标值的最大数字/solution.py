# topics = ["动态规划"]

from typing import List


class Solution:
    def largestNumber(self, cost: List[int], target: int) -> str:
        """
        Dynamic Programming
        time O(n * target), space O(n * target), n 为 cost 的长度
        """
        # dp[i][j] 表示前 i 个数组成成本为 j 的整数的最大位数，若花费总成本无法为 j，则规定其为 float('-inf')
        dp = [[float('-inf')] * (target + 1) for _ in range(10)]
        dp[0][0] = 0

        # where[i][j] 记录转移来源
        where = [[0] * (target + 1) for _ in range(10)]

        for i, c in enumerate(cost):
            for j in range(target + 1):
                if j < c:
                    dp[i + 1][j] = dp[i][j]
                    where[i + 1][j] = j
                else:
                    # 取两者较大值
                    if dp[i][j] > dp[i + 1][j - c] + 1:
                        dp[i + 1][j] = dp[i][j]
                        where[i + 1][j] = j
                    else:
                        dp[i + 1][j] = dp[i + 1][j - c] + 1
                        where[i + 1][j] = j - c

        # 无法得到任何整数
        if dp[9][target] < 0:
            return '0'

        res: List[str] = []
        i, j = 9, target
        while i > 0:
            if j == where[i][j]:
                i -= 1
            else:
                res.append(str(i))
                j = where[i][j]

        return ''.join(res)
