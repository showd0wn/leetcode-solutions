# topics = ["双指针", "滑动窗口"]

from typing import List


class Solution:
    def longestOnes(self, A: List[int], K: int) -> int:
        n = len(A)
        count = left = right = 0

        while right < n:
            if A[right] == 1:
                count += 1

            if right - left + 1 - count > K:
                if A[left] == 1:
                    count -= 1
                left += 1

            right += 1

        return right - left
