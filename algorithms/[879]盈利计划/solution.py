# topics= ["动态规划"]

from typing import List


class Solution:
    def profitableSchemes(
        self, n: int, minProfit: int, group: List[int], profit: List[int]
    ) -> int:
        """
        Dynamic Programming
        time O(len * n * minProfit), space O(len * n * minProfit), len 为工作总数
        """
        # 工作总数
        length = len(group)
        MOD = 10 ** 9 + 7

        # dp[i][j][k] 表示前 i 个工作中选择了 j 个员工，并且利润至少为 k 的情况下的方案数
        dp = [[[0] * (minProfit + 1) for _ in range(n + 1)] for _ in range(length + 1)]
        dp[0][0][0] = 1

        for i in range(1, length + 1):
            members, earn = group[i - 1], profit[i - 1]
            for j in range(n + 1):
                for k in range(minProfit + 1):
                    # 无法展开当前工作
                    if j < members:
                        dp[i][j][k] = dp[i - 1][j][k]
                    # 能够展开当前工作
                    else:
                        dp[i][j][k] = (
                            dp[i - 1][j][k] + dp[i - 1][j - members][max(0, k - earn)]
                        ) % MOD

        total = sum(dp[length][j][minProfit] for j in range(n + 1))

        return total % MOD
