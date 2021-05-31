# topics = ["位运算"]


class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        """
        Bit Manipulation
        time O(1), space O(1)
        """
        if n <= 0:
            return False
        return n & (n - 1) == 0
