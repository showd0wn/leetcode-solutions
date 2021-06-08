# topics = ["动态规划"]

from typing import List


class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:
        """
        Dynamic Programming（0-1 背包）
        参考 https://leetcode-cn.com/problems/last-stone-weight-ii/solution/zui-hou-yi-kuai-shi-tou-de-zhong-liang-i-95p9/
        time O(n * sum), space O(sum), n 为 stones 长度, sum 为 stones 元素总和
        """
        total = sum(stones)
        n = len(stones)
        m = total // 2
        # 要使最后一块石头的重量尽可能小，就要使小的那堆石头的重量和尽可能接近总和的一半
        # 记 dp[i][j] 表示前 i 个石头的能否凑整重量 j
        dp = [[False] * (m + 1) for _ in range(n + 1)]
        dp[0][0] = True

        for i in range(n):
            for j in range(m + 1):
                if j < stones[i]:
                    dp[i + 1][j] = dp[i][j]
                else:
                    dp[i + 1][j] = dp[i][j] or dp[i][j - stones[i]]

        res = 0
        for j in range(m, -1, -1):
            if dp[n][j]:
                res = total - 2 * j
                break

        return res
