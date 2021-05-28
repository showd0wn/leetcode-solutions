# topics = ["位运算"]

from typing import List


class Solution:
    def totalHammingDistance(self, nums: List[int]) -> int:
        """
        Bit Manipulation
        time O(n * L), space O(1), n 为数组长度, L = 30
        """
        n = len(nums)
        res = 0
        for i in range(30):
            c = sum(((val >> i) & 1) for val in nums)
            res += c * (n - c)
        return res
