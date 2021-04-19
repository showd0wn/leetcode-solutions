# topics = ["动态规划"]

from functools import lru_cache


class Solution:
    def climbStairs(self, n: int) -> int:
        """
        动态规划
        """
        dp = [1] * (n + 1)
        for i in range(2, n + 1):
            dp[i] = dp[i - 2] + dp[i - 1]
        return dp[n]

    @lru_cache(None)
    def climbStairs2(self, n: int) -> int:
        """
        记忆化递归
        """
        if n <= 3:
            return n
        return self.climbStairs2(n - 2) + self.climbStairs2(n - 1)
