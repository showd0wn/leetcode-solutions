# topics = ["数组", "哈希表"]

from typing import Dict, List


class Solution:
    def longestWPI(self, hours: List[int]) -> int:
        """
        贪心 + 前缀和 + 哈希表
        time O(n), space O(n), n 为数组长度
        """
        n = len(hours)

        # 前缀和
        preSum = [0] * (n + 1)
        for i, h in enumerate(hours):
            preSum[i + 1] = preSum[i] + (1 if h > 8 else -1)

        # 哈希表记录每种前缀和第一次出现的位置
        d: Dict[int, int] = {}
        d[0] = 0

        res = 0
        for i, s in enumerate(preSum):
            if s > 0:
                res = max(res, i - d[0])
            elif s - 1 in d:  # 若 s <= 0，则距离 s - 1 第一次出现的位置，是以当前位置结尾的最长区间
                res = max(res, i - d[s - 1])

            if s not in d:
                d[s] = i

        return res
