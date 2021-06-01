# topics = ["动态规划"]

from sys import maxsize


class Solution:
    def strangePrinter(self, s: str) -> int:
        """
        Dynamic Programming
        time O(n^3), space O(n^2), n 为字符串长度
        """
        n = len(s)
        # dp[i][j] 表示打印完成区间 [i,j] 的最少操作数
        dp = [[0] * n for _ in range(n)]

        for i in range(n)[::-1]:
            # 打印一个字符串的次数为 1
            dp[i][i] = 1
            for j in range(i + 1, n):
                if s[i] == s[j]:
                    dp[i][j] = dp[i][j - 1]
                # 区间两端的字符不相同，则枚举所有的可能组合，然后取其最优解
                else:
                    minn = maxsize
                    for k in range(i, j):
                        minn = min(minn, dp[i][k] + dp[k + 1][j])
                    dp[i][j] = minn

        return dp[0][n - 1]
