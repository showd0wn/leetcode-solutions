# topics = ["动态规划"]

from typing import List


class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        """
        近似题 518. 零钱兑换 II
        完全背包 & 恰好装满，求所有方案（组合）
        """
        # dp[i] 表示组成目标数 i 所有的组合
        dp: List[List[List[int]]] = [[] for _ in range(target + 1)]
        dp[0] = [[]]

        # 先遍历物品， 再遍历背包大小！
        for c in candidates:
            for i in range(1, target + 1):
                if i >= c:
                    dp[i].extend([x + [c] for x in dp[i - c]])

        return dp[target]
