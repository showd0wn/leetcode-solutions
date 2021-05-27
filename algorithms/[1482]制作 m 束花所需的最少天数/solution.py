# topics = ["数组", "二分查找"]

from typing import List


class Solution:
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        """
        Binary Search
        time O(nlog(high - low)), space O(1), n 为 bloomDay 的长度, high 和 low 分别为其中最大、最小值
        """
        n = len(bloomDay)
        if m * k > n:
            return -1

        def canMake(days: int) -> bool:
            bouquets = flowers = 0
            for bloom in bloomDay:
                if bloom <= days:
                    flowers += 1
                    if flowers == k:
                        bouquets += 1
                        if bouquets == m:
                            break
                        flowers = 0
                else:
                    flowers = 0
            return bouquets == m

        low, high = min(bloomDay), max(bloomDay)
        while low < high:
            days: int = (low + high) // 2
            if canMake(days):
                high = days
            else:
                low = days + 1

        return low
