# topics = ["字符串", "动态规划"]


class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        # dp[i][j] 表示区间 [i, j] 间的最长回文子串
        dp = [[False] * n for _ in range(n)]
        res = ''

        for i in range(n)[::-1]:
            for j in range(i, n):
                if j == i:
                    dp[i][j] = True
                elif j == i + 1:
                    dp[i][j] = s[i] == s[j]
                else:
                    dp[i][j] = dp[i + 1][j - 1] and (s[i] == s[j])

                if dp[i][j] and j - i + 1 > len(res):
                    res = s[i : j + 1]

        return res
