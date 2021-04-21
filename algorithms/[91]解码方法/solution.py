# topics = ["动态规划"]

from typing import List


class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)

        # dp[i] 表示使用前 i 个字符的解码数
        dp: List[int] = [0] * (n + 1)
        dp[0] = 1
        dp[1] = 1 if s[0] != '0' else 0

        for i in range(2, n + 1):
            # 使用了一个字符，即 s[i] 进行解码
            if s[i - 1] != '0':
                dp[i] += dp[i - 1]

            # 使用了两个字符，即 s[i-1] 和 s[i] 进行编码
            if s[i - 2] == '1' or (s[i - 2] == '2' and s[i - 1] < '7'):
                dp[i] += dp[i - 2]

        return dp[n]
