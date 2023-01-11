# topics = ["二分查找"]

from typing import List


class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        """
        Binary Search
        time O(logn), space O(1)
        """
        n = len(arr)
        i, j = 0, n

        while i < j:
            m: int = (i + j) // 2
            if (m > 0 and arr[m] < arr[m - 1]) or (m < n - 1 and arr[m] > arr[m + 1]):
                j = m
            else:
                i = m + 1

        return i
