# topics = ["动态规划"]

from sys import maxsize
from math import sqrt


class Solution:
    def numSquares(self, n: int) -> int:
        """
        Dynamic Programming
        time O(n * sqrt(n)), space O(n)
        """
        dp = [maxsize] * (n + 1)
        dp[0] = 0

        for i in range(1, n + 1):
            for j in range(1, int(sqrt(i)) + 1):
                dp[i] = min(dp[i], dp[i - j * j] + 1)

        return dp[n]
