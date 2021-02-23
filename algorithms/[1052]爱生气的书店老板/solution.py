# topics = ["数组", "滑动窗口"]

from typing import List


class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], X: int) -> int:
        #  X 分钟内最多生气的客户数
        max_value = last = sum([customers[i] for i in range(0, X) if grumpy[i] == 1])

        n = len(customers)

        for j in range(X, n):
            i = j - X + 1
            if grumpy[i - 1] == 1:
                last -= customers[i - 1]
            if grumpy[j] == 1:
                last += customers[j]

            max_value = max(max_value, last)

        return sum([customers[i] for i in range(0, n) if grumpy[i] == 0]) + max_value
