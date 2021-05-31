# topics = ["动态规划"]


class Solution:
    def numWays(self, steps: int, arrLen: int) -> int:
        """
        DP
        time O(steps * min(arrLen, steps)), space O(steps * min(arrLen, steps))
        """
        maxColumn = min(steps // 2, arrLen - 1)
        # dp[i][j] 表示 i 步操作之后，指针位于下标 j 的方案数
        dp = [[0] * (maxColumn + 1) for _ in range(steps + 1)]
        dp[0][0] = 1

        for i in range(1, steps + 1):
            for j in range(maxColumn + 1):
                dp[i][j] = dp[i - 1][j]
                if j - 1 >= 0:
                    dp[i][j] += dp[i - 1][j - 1]
                if j + 1 <= maxColumn:
                    dp[i][j] += dp[i - 1][j + 1]

        return dp[steps][0] % (10 ** 9 + 7)
