# topics = ["数组", "滑动窗口"]

from typing import List


class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        """
        由于只能从开头和末尾拿 k 张卡牌，所以最后剩下的必然是连续的 n-k 张卡牌
        可以通过求出剩余卡牌点数之和的最小值，来求出拿走卡牌点数之和的最大值
        """

        n = len(cardPoints)
        min_value = total = sum(cardPoints[: n - k])
        for i in range(1, k + 1):
            total += cardPoints[n - k + i - 1] - cardPoints[i - 1]
            min_value = min(min_value, total)

        return sum(cardPoints) - min_value
