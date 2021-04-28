# topics = ["数组", "滑动窗口"]

from typing import List


class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        """
        由于只能从开头和末尾拿 k 张卡牌，所以最后剩下的必然是连续的 n-k 张卡牌，问题便转化为求出剩余卡牌点数之和的最小值
        time O(n), space O(1), n 为数组 cardPoints 的长度
        """
        n = len(cardPoints)
        min_value = total = sum(cardPoints[: n - k])
        for i in range(1, k + 1):
            total += cardPoints[n - k + i - 1] - cardPoints[i - 1]
            min_value = min(min_value, total)

        return sum(cardPoints) - min_value
